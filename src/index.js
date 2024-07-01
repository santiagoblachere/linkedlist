import "./style.css";

class LinkedList {
	constructor() {
		this.head = null;
	}
	prepend(value) {
		const newNode = new Node(value);
		let temporal = this.head || null;
		if (temporal != null) {
			this.head = newNode;
			newNode.nextNode = temporal;
		} else {
			this.head = newNode;
		}
	}
	append(value) {
		if (this.head === null) this.prepend(value);
		else {
			let temp = this.head;
			while (temp.nextNode != null) temp = temp.nextNode;
			temp.nextNode = new Node(value);
		}
	}
	size() {
		let tmp = this.head;
		let counter = 0;
		while (tmp != null) {
			counter++;
			tmp = tmp.nextNode;
		}
		return counter;
	}
	getHeadNode() {
		let headNode = this.head;
		return headNode;
	}
	at(index) {
		const total = this.size();
		let nodeTravelDistance = total - index;
		let temp = this.head;
		let counter = total;
		while (counter > nodeTravelDistance) {
			counter--;
			if (temp.nextNode == null) {
				return "ERROR: NO SUCH NODE";
			}
			temp = temp.nextNode;
		}

		return temp;
	}
	pop() {
		let temp = this.head;
		let dataSize = this.size();
		for (let index = 1; index < dataSize - 1; index++) {
			temp = temp.nextNode;
		}
		temp.nextNode = null;
	}
	contains(value) {
		let temp = this.head;
		while (temp.nextNode !== null) {
			if (temp.value === value) return true;
			temp = temp.nextNode;
		}
		return false;
	}
	find(value) {
		let index = 0;
		let temp = this.head;
		while (temp.nextNode !== null) {
			if (temp.value === value) return index;
			if (temp.nextNode.value === value) return index + 1;
			temp = temp.nextNode;
			index++;
		}
		return null;
	}
	toString() {
		let string = "";
		let temp = this.head;
		while (temp !== null) {
			let thisNodeStringify = temp.value.toString();
			if (string != "") string = string + "->" + thisNodeStringify;
			else string = thisNodeStringify;
			temp = temp.nextNode;
		}
		return string;
	}
	/* find(value) returns the index of the node containing value, or null if not found.
toString represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> nullz*/
}

class Node {
	constructor(value) {
		this.value = value || null;
		this.nextNode = null;
	}
}

const list = new LinkedList();
list.prepend("4");
list.prepend("5");
list.prepend("6");
list.prepend("7");
list.append("23");
// 7 6 5 4 23
let size = list.size();
console.log(size); // 5
let head = list.getHeadNode();
console.log(head); // 7 node
let indexRandom = list.at(4);
console.log(indexRandom); // 23
list.pop();
// 7 6 5 4
console.log(list.at(3)); // 4
console.log(list.at(4)); // null (ERROR: NO SUCH NODE)
console.log(list.toString()); // 7->6->5->4
