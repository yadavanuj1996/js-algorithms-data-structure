// Set up jasmine
import jasmineRequire from 'jasmine-core/lib/jasmine-core/jasmine.js';
window.jasmineRequire = jasmineRequire;
import 'jasmine-core/lib/jasmine-core/jasmine-html.js';
import 'jasmine-core/lib/jasmine-core/boot.js';

// Import your spec files
import './Heap.test';
import './MaxHeap.test';
import './MinHeap.test';

export let executeHeapTest=()=>{
  (function bootstrap () {
    if (window.jasmineRef) {
      location.reload();

      return;
    }

    window.onload(new Event('anything'));
    window.jasmineRef = jasmine.getEnv();
  }());
};
 
