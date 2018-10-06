// Function to generate the best possible timetable.

const crypto = require("crypto");

const rand = async (slots, count) => {
	
	let i;
	let viableDays = [];
	for(i in slots){
		if (slots[i].length > count){
			viableDays.push(i);
		}
	}
	
	if(viableDays.length == 0)
		return null; 

	let buff = crypto.randomBytes(2);
	let n = parseInt(buff.toString('hex'),16)
	console.log(n);	

	let index =  n % (viableDays.length);
	let day = viableDays[index]


	buff = crypto.randomBytes(2);
	n = parseInt(buff.toString('hex'),16)
	console.log(n);

	let slot = n % slots[day].length;

	console.log(day, slot)
}

const generate = async (instaces, givenSlots, teachers, sections) => {
	
	let secInstances  = {};	
	let i,j,k;
	for (i in sections){
		secInstances[sections[i]] = [];
	}

	for (i in sections){
		for(j in instaces){
			for(let k in instaces[j].sections){ 
				if(instaces[j].sections[k] == sections[i]){
					secInstances[sections[i]].push(instaces[j]);
				}
			}	
		}
	}
	
	//console.log(secInstances);
	let TT = [];
	let secTT = [];
	let techerTT = [];

	for(i in secInstances){
					
	}
}
/*
generate([{
	teacher: "T1",
	sections: ["12A"],
	subject: "English",
	numLectures: "4",
	numLabs: null
},{
	teacher: "T2",
	sections: ["12A"],
	subject: "Hindi",
	numLectures: "4",
	numLabs: null
},{
	teacher: "T3",
	sections: ["12A"],
	subject: "Maths",
	numLectures: "4",
	numLabs: null
},{
	teacher: "T4",
	sections: ["12A"],
	subject: "Science",
	numLectures: "4",
	numLabs: null
},{
	teacher: "T1",
	sections: ["12B"],
	subject: "English",
	numLectures: "4",
	numLabs: null
},{
	teacher: "T2",
	sections: ["12B"],
	subject: "Hindi",
	numLectures: "4",
	numLabs: null
},{
	teacher: "T5",
	sections: ["12B"],
	subject: "Maths",
	numLectures: "4",
	numLabs: null
},{
	teacher: "T6",
	sections: ["12B"],
	subject: "Science",
	numLectures: "4",
	numLabs: null
}], [8,8,8,8,8,8,5], ["T1", "T2", "T3", "T4", "T5", "T6"], ["12A", "12B"]); */
rand([[1,2,3,4], [1,2,3,4], [1,2,3,4]], 2)