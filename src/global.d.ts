  // global.d.ts
declare module '*.jpg' {
    const content: any; // You can also use 'string' if you want to restrict it to string type
    export default content;
  }
  
  declare module '*.png' {
    const content: any;
    export default content;
  }
  
  declare module '*.svg' {
    const content: any;
    export default content;
  }
  
  // Add more declarations as needed for other image formats