import { createTest, createVue, destroyVM } from '../util';
import Alert from 'packages/alert';

describe('Alert', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Alert, {
      title: 'test',
      showIcon: true
    }, true);
    expect(vm.$el.querySelector('.dm-alert__title').textContent).to.equal('test');
    expect(vm.$el.classList.contains('dm-alert--info')).to.true;
  });

  it('type', () => {
    vm = createTest(Alert, {
      title: 'test',
      type: 'success',
      showIcon: true
    }, true);
    expect(vm.$el.classList.contains('dm-alert--success')).to.true;
  });

  it('description', () => {
    vm = createTest(Alert, {
      title: 'Dorne',
      description: 'Unbowed, Unbent, Unbroken',
      showIcon: true
    }, true);
    expect(vm.$el.querySelector('.dm-alert__description').textContent)
      .to.equal('Unbowed, Unbent, Unbroken');
  });

  it('theme', () => {
    vm = createTest(Alert, {
      title: 'test',
      effect: 'dark'
    }, true);
    expect(vm.$el.classList.contains('is-dark')).to.true;
  });

  it('title slot', () => {
    vm = createVue(`
      <dm-alert>
        <span slot="title">foo</span>
      </dm-alert>
    `);

    expect(vm.$el.querySelector('.dm-alert__title').textContent).to.equal('foo');
  });

  it('close', () => {
    vm = createVue({
      template: `
        <div>
          <dm-alert
            title="test"
            close-text="close"></dm-alert>
        </div>
      `
    }, true);
    vm.$el.querySelector('.dm-alert__closebtn').click();
    expect(vm.$children[0].visible).to.false;
  });
});
