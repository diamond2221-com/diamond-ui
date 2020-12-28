import { createVue, destroyVM } from '../util';

describe('Breadcrumb', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', done => {
    vm = createVue(`
      <dm-breadcrumb separator=">">
        <dm-breadcrumb-item to="/">首页</dm-breadcrumb-item>
        <dm-breadcrumb-item>活动管理</dm-breadcrumb-item>
        <dm-breadcrumb-item>活动列表</dm-breadcrumb-item>
        <dm-breadcrumb-item>活动详情</dm-breadcrumb-item>
      </dm-breadcrumb>
    `);
    vm.$nextTick(_ => {
      expect(vm.$el.querySelector('.dm-breadcrumb__separator').innerText).to.equal('>');
      done();
    });
  });
});
