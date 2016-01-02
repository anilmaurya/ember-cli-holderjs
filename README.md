# ember-cli-holderjs 

Ember cli addon for https://github.com/imsky/holder

## Installation

* `ember install ember-cli-holderjs`

## Usage
 This addon provides an `ember-cli-holderjs` component.

```handlebars
{{ember-cli-holderjs
  src_url="holder.js/132x128?text=Photo"
  class="customClass"
}}
```

### Properties

<table width="100%">
  <tr>
  	<th valign="top" width="165px" align="left">Property</th>
  	<th valign="top" align="left">Description</th>
  </tr>
  <tr>
    <td valign="top"><code>src_url</code></td>
    <td valign="top">holderjs placeholder url (see https://github.com/imsky/holder#placeholder-options)</td>
  </tr>
  <tr>
    <td valign="top"><code>class</code></td>
    <td valign="top">css class (optional)</td>
  </tr>
</table>

## Collaborate

### Setup
* `git clone` this repository
* `npm install`
* `bower install`

### Running

* `ember server`
* Visit your app at http://localhost:4200.

### Running Tests

* `ember test`
* `ember test --server`
