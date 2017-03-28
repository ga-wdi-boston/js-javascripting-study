const pets = ['cat', 'dog', 'rat']
pets.forEach((e, i, a) => { a[i] += 's' })
console.log(pets)
