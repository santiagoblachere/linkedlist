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
	/* 
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
list.prepend("4");
list.prepend("5");
list.prepend("6");
list.prepend("7");
list.append("23");

// 7 6 5 4 23
let size = list.size();

let head = list.getHeadNode();

let indexRandom = list.at(4);
console.log(indexRandom);
