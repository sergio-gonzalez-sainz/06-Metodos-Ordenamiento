<h1 align="center"> 06-Metodos-Ordenamiento</h1>

<p align="center"><img src="/Metodos.png"></p> 



## Descripción y contexto
---
Link del proyecto (codepen): https://codepen.io/sergio-gonzalez-sainz/project/editor/XaqbJj

<a href="https://sergio-gonzalez-sainz.github.io/06-Metodos-Ordenamiento.github.io/" target="_blank">Project Link</a>

Is a little web page that can visualize two sort's methods:

1 - Bubble sort 
2 - Inset sort 

The user can indicate how many numbers want to sort and can select the method. 


## 1 - Select Method

The user need to select the sort mothod cliking  one option of the list, this element are validated, is required by work the system :

1. Bubble Sort 
2. Insertion Sort

```jsx
<select name="Method">
  <option >Bubble Sort</option>
  <option >Insertion Sort</option>
</select>
```

This step will save the option that will make us redirect to a new view when the user presses the button "**Ordenar**" that be in the end in the form. 

## 2 - Array size

The user need to select the size cliking one option of the list, this element are validated, is required by work the system :

```html
<select name="Method">
  <option >Bubble Sort</option>
  <option >Insertion Sort</option>
</select>
```

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/10734bd3-47b7-403e-8d91-d7056b3f3afa/Metodos.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/10734bd3-47b7-403e-8d91-d7056b3f3afa/Metodos.jpg)

## 3 - Button "Ordenar"

By this step the user will have selected the method and array size. 

In the case that <select> of field Method or field Array Size are unselectec the system should show a Window alert() that notify to user that need to select one option in every field .

In the case that two field are seleted, when the user cliking "Ordener" Button the user will be redirect to a new view, can be redirect to Bubble Sort windows or Insertion Sort window, It will depend on which option user choose in the fields.


