import { Component } from 'vue';

declare module '*.svg?inline' {
  const content: Component | string;
  export default content;
}
