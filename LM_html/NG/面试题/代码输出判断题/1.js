// 考察对原型的理解

function Func() {
  getName = () => console.log(1)
  return this
}

Func.getName = () => console.log(2)
Func.prototype.getName = () => console.log(3)

var getName = () => console.log(4)
function getName() {
  console.log(5)
}

Func.getName()
getName()
new Func().getName()
getName()