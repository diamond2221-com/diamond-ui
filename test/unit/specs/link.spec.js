import { createTest, createVue, destroyVM, wait } from '../util';
import Link from 'packages/link';

describe('Link', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Link, {
      type: 'primary'
    }, true);
    let linkElm = vm.$el;
    expect(linkElm.classList.contains('dm-link--primary')).to.be.true;
  });
  it('icon', () => {
    vm = createTest(Link, {
      icon: 'dm-icon-search'
    }, true);
    let linkElm = vm.$el;
    expect(linkElm.querySelector('.dm-icon-search')).to.be.ok;
  });
  it('href', () => {
    vm = createTest(Link, {
      href: 'https://element.eleme.io/'
    }, true);
    let linkElm = vm.$el;
    expect(linkElm.getAttribute('href')).to.be.equal('https://element.eleme.io/');
  });
  it('target', () => {
    vm = createVue(`
    <dm-link href="https://element.eleme.io" target="_blank">
      default
    </dm-link>
    `);
    let linkElm = vm.$el;
    expect(linkElm.getAttribute('target')).to.be.equal('_blank');
  });
  it('disabled', () => {
    vm = createTest(Link, {
      disabled: true
    }, true);
    let linkElm = vm.$el;
    expect(linkElm.classList.contains('is-disabled')).to.be.true;
  });

  it('click', async() => {
    let result;
    vm = createVue({
      template: `
        <dm-link @click="handleClick"></dm-link>
      `,
      methods: {
        handleClick(evt) {
          result = evt;
        }
      }
    }, true);
    vm.$el.click();
    await wait();
    expect(result).to.exist;
  });

});

