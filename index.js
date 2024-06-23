
//QUESTION1

const characters = (str) => {
    const stack = [];
    const map = {
      ')': '(',
      ']': '[',
      '}': '{'
    };
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '(' || str[i] === '[' || str[i] === '{') {
        stack.push(str[i]);
      } else {
        const last = stack.pop();
        if (map[str[i]] !== last) {
          return false;
        }
      }
    }
    return stack.length === 0;
  }
  
  console.log(characters("()")); // true
  console.log(characters("([)}")); // false
  console.log(characters("([)]")); // false

  //Big O = O(n)



//QUESTION 2


  const pairSum = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === target) {
          return [i, j];
        }
      }
    }
    return [];
  };
 
  console.log(pairSum([2, 15, 11, 7], 9)); // [0, 3]
  console.log(pairSum([4, 3, 2], 6)); // [1, 2]

  //Big O =O(n^2)



//Question 5 and 6



  // Node constructor function
const Node = (value)=> {
    return {
      value: value,
      next: null,
    };
  }
  
  // Function to insert a new node into the sorted linked list
  const insertNode = (head, value)=>{
    const newNode = Node(value);
  
    if (!head || head.value >= value) {
      newNode.next = head;
      return newNode;
    }
  
    let current = head;
    while (current.next && current.next.value < value) {
      current = current.next;
    }
  
    newNode.next = current.next;
    current.next = newNode;
    return head;
  }
  
  //Question5
  // Function to print the linked list. 
  const  printList = (head) => {
    let current = head;
    let result = '';
  
    while (current) {
      result += current.value;
      if (current.next) {
        result += ' , ';
      }
      current = current.next;
    }
  
    console.log(result);
  }
  
  //Question6
  // Function to reverse the linked list
  const reverseList = (head) => {
    let prev = null;
    let current = head;
    let next = null;
  
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
  
    return prev;
  }
  
  // Create a linked list and insert nodes
  let head = null;
  head = insertNode(head, 1);
  head = insertNode(head, 2);
  head = insertNode(head, 4);
  head = insertNode(head, 5);
  head = insertNode(head, 3); // Insert 3 in the correct position
  
  // Print the list
  printList(head); // Output: 1 , 2 , 3 , 4 , 5
  
  // Reverse the list
  head = reverseList(head);
  
  // Print the reversed list
  printList(head); // Output: 5 , 4 , 3 , 2 , 1
  
  