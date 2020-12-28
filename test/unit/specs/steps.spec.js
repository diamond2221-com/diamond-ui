import { createVue, destroyVM, waitImmediate } from '../util';

describe('Steps', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createVue(`
      <dm-steps>
        <dm-step title="step1"></dm-step>
        <dm-step title="step2"></dm-step>
        <dm-step title="step3"></dm-step>
      </dm-steps>
    `);

    expect(vm.$el.querySelectorAll('.dm-step')).to.length(3);
  });

  it('space', async() => {
    vm = createVue(`
      <dm-steps>
        <dm-step title="step1"></dm-step>
        <dm-step title="step2"></dm-step>
        <dm-step title="step3"></dm-step>
      </dm-steps>
    `, true);

    const vm2 = createVue(`
      <dm-steps :space="100">
        <dm-step title="step1"></dm-step>
        <dm-step title="step2"></dm-step>
        <dm-step title="step3"></dm-step>
        <dm-step title="step4"></dm-step>
      </dm-steps>
    `, true);

    await waitImmediate();
    const stepElm = vm.$el.querySelector('.dm-step');
    const stepElm2 = vm2.$el.querySelector('.dm-step');
    expect(getComputedStyle(stepElm).flexBasis).to.equal('50%');
    expect(getComputedStyle(stepElm2).flexBasis).to.equal('100px');
  });

  it('processStatus', done => {
    vm = createVue(`
      <dm-steps :active="1" process-status="error">
        <dm-step title="step1"></dm-step>
        <dm-step title="step2"></dm-step>
        <dm-step title="step3"></dm-step>
      </dm-steps>
    `);

    vm.$nextTick(_ => {
      expect(vm.$el.querySelectorAll('.dm-step__head.is-error')).to.length(1);
      done();
    });
  });

  it('update processStatus', done => {
    vm = createVue({
      template: `
        <dm-steps :active="1" :process-status="processStatus">
          <dm-step title="abc"></dm-step>
          <dm-step title="abc2"></dm-step>
        </dm-steps>
      `,
      data() {
        return { processStatus: 'error' };
      }
    });

    vm.$nextTick(_ => {
      expect(vm.$el.querySelectorAll('.dm-step__head.is-error')).to.length(1);
      vm.processStatus = 'process';
      vm.$nextTick(_ => {
        expect(vm.$el.querySelectorAll('.dm-step__head.is-process')).to.length(1);
        done();
      });
    });
  });

  it('finishStatus', done => {
    vm = createVue(`
      <dm-steps :active="1" finish-status="error">
        <dm-step title="abc"></dm-step>
        <dm-step title="abc2"></dm-step>
      </dm-steps>
    `);

    vm.$nextTick(_ => {
      expect(vm.$el.querySelectorAll('.dm-step__head.is-error')).to.length(1);
      done();
    });
  });

  it('active', done => {
    vm = createVue({
      template: `
        <dm-steps :active="active" finish-status="error">
          <dm-step title="abc"></dm-step>
          <dm-step title="abc2"></dm-step>
        </dm-steps>
      `,

      data() {
        return { active: 0 };
      }
    });

    vm.$nextTick(_ => {
      expect(vm.$el.querySelectorAll('.dm-step__head.is-error')).to.length(0);
      vm.active = 2;
      vm.$nextTick(_ => {
        expect(vm.$el.querySelectorAll('.dm-step__head.is-error')).to.length(2);
        done();
      });
    });
  });

  it('create vertical', () => {
    vm = createVue(`
      <dm-steps direction="vertical">
        <dm-step title="aaa"></dm-step>
        <dm-step title="bbb"></dm-step>
      </dm-steps>
    `);

    expect(vm.$el.querySelector('.is-vertical')).to.exist;
  });

  it('vertical:height', async() => {
    vm = createVue(`
      <dm-steps direction="vertical" :space="200">
        <dm-step title="aaa"></dm-step>
        <dm-step title="bbb"></dm-step>
      </dm-steps>
    `, true);

    await waitImmediate();
    const stepElm = vm.$el.querySelector('.dm-step');
    expect(getComputedStyle(stepElm).flexBasis).to.equal('200px');
  });

  it('step:status=error', done => {
    vm = createVue(`
      <dm-steps :active="2" process-status="process" finish-status="success" direction="horizontal">
        <dm-step title="step1"></dm-step>
        <dm-step title="step2" status="error"></dm-step>
        <dm-step title="step3"></dm-step>
      </dm-steps>
    `);

    vm.$nextTick(_ => {
      const errorLine = vm.$el.querySelector('.dm-step:nth-child(2) .dm-step__line-inner');
      expect(errorLine.getBoundingClientRect().width).to.equal(0);
      const nextStep = vm.$el.querySelector('.dm-step:nth-child(3) .dm-step__head');
      expect(nextStep.classList.contains('is-wait')).to.equal(true);
      done();
    });
  });
});
