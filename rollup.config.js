import merge from 'deepmerge';
import { createBasicConfig } from '@open-wc/building-rollup';
 
const baseConfig = createBasicConfig();
 
export default merge(baseConfig, {
  input: './out-tsc/src/app.js',
  output: {
      dir: 'dist',
  }
});