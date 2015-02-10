# Column

Columns a bit more in depth and specify the size of the grid element. All the sizes are Bootstraps numbers, so just pass them to it and it magically works!

```jsx
<Column extraSmall={ 12 }
        small={ 1 }
        medium={ 4 }
        large={ 8 }
        largeOffset={ 4 }>
  { /* Children elements */ }
</Column>
```

## Attributes

There are a lot more attributes on this element.

### Sizes

The most commonly used attribute will be the size. Each size takes a number and then appends to the specific class. These sizes are:

- extraSmall `.col-xs-`
- small `.col-sm-`
- medium `.col-md-`
- large `.col-lg-`

### Offsets

Bootstrap's grid allows you to move it around in each breakpoint without duplicate markup with offsets. Offsets all take a number. Append `Offset` to the size attributes:

- extraSmallOffset `.col-xs-offset-`
- smallOffset `.col-sm-offset-`
- mediumOffset `.col-md-offset-`
- largeOffset `.col-lg-offset-`
