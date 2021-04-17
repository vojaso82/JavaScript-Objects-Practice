Print (console.log()) value of the property name in the given object:
 let student = {
   name: 'Max',
   age: 27
 };
 console.log(student.name); 



/*   Find the value of the price property, and if it is greater than 100, discount it by 10%. If that’s not the      case, discount it by 7%. Update the object with :

     - the new property - discount and the corresponding value (7% or 10%) and
     
     - the new price. */

     let product = {
        name: 'headphones',
        price: 100,
      };
      
      if (product.price > 100){
         product.discount = 0.1
         (product.price *= product.discount).toFixed(1)
      } else {
        product.discount = 0.07
        product.price = Number((product.price * product.discount).toFixed(1))
      } 
      //console.log('Updated product:', product)
      
      /*Use given object and loop through its properties, and if it has property “discount” print “Already discounted by…” and add the value (how much was the discount). In the opposite case, do what you did in the previous exercise: check the price, depending on it (if it is greater or lower than 100), add a discount (10% or 7%) and add the property “discount” to the object. */
      
      for(let key in product){
        if ('discount' in product){
          console.log(`Already discounted by ${product.discount}`)
        } else {
          if (product.price > 100){
         product.discount = 0.1
         (product.price *= product.discount).toFixed(1)
      } else {
        product.discount = 0.07
        product.price = Number((product.price * product.discount).toFixed(1))
      } 
        }
          
      } 
      
      
      console.log(key, product[key])