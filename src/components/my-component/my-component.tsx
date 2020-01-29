import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {

  private data = new Map<string, number>([
    ['A', 1],
    ['B', 2],
    ['C', 3]
  ]);

  render() {
    return(
      <div>
        {[...this.data.entries()].map(item => {
          return <div>{item[0] + ' ' + item[1]}</div>;
        })}
      </div>
    );
  }
}
