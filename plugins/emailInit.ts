import { Plugin } from '@nuxt/types';
import { initEmailConfiguration } from '@/api/sendEmail';

const emailInit: Plugin = ({ $config }) => {
  initEmailConfiguration($config.mandrillApiKey);
};

export default emailInit;
