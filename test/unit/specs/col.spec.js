import { createVue, destroyVM } from '../util';

describe('Col', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createVue({
      template: `
        <dm-col :span="12">
        </dm-col>
      `
    }, true);
    let colElm = vm.$el;
    expect(colElm.classList.contains('dm-col')).to.be.true;
  });
  it('span', () => {
    vm = createVue({
      template: `
        <dm-col :span="12">
        </dm-col>
      `
    }, true);
    let colElm = vm.$el;
    expect(colElm.classList.contains('dm-col-12')).to.be.true;
  });
  it('pull', () => {
    vm = createVue({
      template: `
        <dm-col :span="12" :pull="3">
        </dm-col>
      `
    }, true);
    let colElm = vm.$el;
    expect(colElm.classList.contains('dm-col-pull-3')).to.be.true;
  });
  it('push', () => {
    vm = createVue({
      template: `
        <dm-col :span="12" :push="3">
        </dm-col>
      `
    }, true);
    let colElm = vm.$el;
    expect(colElm.classList.contains('dm-col-push-3')).to.be.true;
  });
  it('gutter', () => {
    vm = createVue({
      template: `
        <dm-row :gutter="20">
          <dm-col :span="12" ref="col">
          </dm-col>
        </dm-row>
      `
    }, true);
    let colElm = vm.$refs.col.$el;
    expect(colElm.style.paddingLeft === '10px').to.be.true;
    expect(colElm.style.paddingRight === '10px').to.be.true;
  });
  it('responsive', () => {
    vm = createVue({
      template: `
        <dm-row :gutter="20">
          <dm-col ref="col" :sm="{ span: 4, offset: 2 }" :md="8" :lg="{ span: 6, offset: 3 }">
          </dm-col>
        </dm-row>
      `
    }, true);
    let colElm = vm.$refs.col.$el;
    expect(colElm.classList.contains('dm-col-sm-4')).to.be.true;
    expect(colElm.classList.contains('dm-col-sm-offset-2')).to.be.true;
    expect(colElm.classList.contains('dm-col-lg-6')).to.be.true;
    expect(colElm.classList.contains('dm-col-lg-offset-3')).to.be.true;
    expect(colElm.classList.contains('dm-col-md-8')).to.be.true;
  });
});
