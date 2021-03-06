```meta
  category: Forms
```

---

#### Examples

Form ships with handy wrappers around fields which takes care of layout, styling and accessibility.

```js
<Form>
  <Form.TextInput label="Field label" type="text" placeholder="Enter something" />
</Form>
```

There are multiple field types supported like `TextInput`, `TextArea` and `Select`

```js
<Form>
  <Form.TextInput label="Field label" type="text" placeholder="Enter something" />
  <Form.TextArea label="Long input" placeholder="Add a lot of text here" />
  <Form.Select
    label="Options list"
    options={[
      { text: 'First option', value: '1', defaultSelected: true },
      { text: 'Second option', value: '2' },
      { text: 'Third option', value: '3' },
      { text: 'Fourth option', value: '4' }
    ]}
  />
</Form>
```

Long forms should be divided into smaller groups using a `FieldSet`

```js
<Form>
  <Form.FieldSet label="Group 1">
    <Form.TextInput label="Field label" type="text" placeholder="Enter something" />
    <Form.TextArea label="Long input" placeholder="Add a lot of text here" />
  </Form.FieldSet>

  <Form.FieldSet label="Group 2">
    <Form.TextInput label="Field label" type="text" placeholder="Enter something" />
    <Form.TextInput label="Field label" type="text" placeholder="Enter something" />
  </Form.FieldSet>
</Form>
```

At the end of the forms, you need actions that the user can take. Pass a `primaryAction` with the label and method to call.

```js
<Form>
  <Form.TextInput label="Field label" type="text" placeholder="Enter something" />
  <Form.Actions primaryAction={{ label: 'Save Changes', method: this.save }} />
</Form>
```

You can also have an `array` of `secondaryActions` and `destructiveActions`

```js
<Form>
  <Form.TextInput label="Field label" type="text" placeholder="Enter something" />
  <Form.Actions
    primaryAction={{ label: 'Save Changes', method: this.save }}
    secondaryActions={[{ label: 'Clear', method: this.clear }]}
    destructiveActions={[{ label: 'Delete Client', method: this.delete }]}
  />
</Form>
```
