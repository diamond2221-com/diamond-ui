import { createTest, createVue, destroyVM } from '../util';
import Badge from 'packages/badge';

describe('Badge', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('value', () => {
    vm = createTest(Badge, { value: 80 });
    expect(vm.content).to.equal(80);
  });

  it('is fixed', () => {
    vm = createVue(`
      <dm-badge>
        <button>click</button>
      </dm-badge>
    `);

    expect(vm.$el.querySelector('.dm-badge__content.is-fixed')).to.exist;
  });

  it('is dot', () => {
    vm = createVue(`
      <dm-badge is-dot>
        <button>click</button>
      </dm-badge>
    `);

    expect(vm.$el.querySelector('.dm-badge__content.is-dot')).to.exist;
  });

  it('max', () => {
    vm = createTest(Badge, { max: 100, value: 200 });
    expect(vm.content).to.equal('100+');
    vm = createTest(Badge, { max: 100, value: 80 });
    expect(vm.content).to.equal(80);
  });
});
