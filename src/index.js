import "./style.css";

console.log("testasd");

class LinkedList {
	constructor() {
		this.head = null;
	}
	append(value) {
		const newNode = new Node();
		newNode.value = value;
		if (this.head === null) this.head = newNode;
	}
	prepend(value) {
		const newNode = new Node();
		newNode.value = value;
		if (this.head !== null) {
			newNode.nextNode = this.head.value;
			this.head = newNode;
		}
	}
	/* 
	size() {}
	head() {}
	at(index) {}
	pop() {}
	contains(value) {}
    */
}

class Node {
	constructor(value) {
		this.value = value || null;
		this.nextNode = null;
	}
}

const list = new LinkedList();
//  3 - 3
list.append("3");

list.append("3");

console.log(list);
