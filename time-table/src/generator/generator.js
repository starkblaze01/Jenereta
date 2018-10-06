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
	let slot = [];

	for(i=0;i<count;i++){
		buff = crypto.randomBytes(2);
		n = parseInt(buff.toString('hex'),16)
	
		let s = n % slots[day].length;
		slot.push(s);
		slots[day].pop(s);
		delete s;
	}
	delete buff, n, viableDays, i,index;
	console.log(day,slot)
	return day, slot
}

const generate = async (instaces, givenSlots, teachers, sections) => {
	
	let secInstances  = {};	
	let i,j,k;
	let TT = [];
	let secTT = {};
	let teacherTT = {};

	for (i in sections){
		let mapp = givenSlots.map(x =>{z =[]; for(j=0;j<x;j++){z.push(0);} return z;});
		secInstances[sections[i]] = [];
		secTT[sections[i]] = mapp;
		delete mapp,j;
	}

	for (i in teachers){
		let mapp = givenSlots.map(x =>{z =[]; for(j=0;j<x;j++){z.push(0);} return z;});
		teacherTT [teachers[i]] = mapp;
		delete mapp,j;
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

	for(i in sections){

		let currentTT = givenSlots.map(x =>{z =[]; for(j=0;j<x;j++){z.push(0);} return z;});
		for(j in secInstances[sections[i]]){
			
			let availSlots = [];
			for(day =0 ; day < givenSlots.length; day++){
			
				let daySlots = []
				for(slot= 0; slot < givenSlots[day]; slot++){
			
					if((teacherTT[secInstances[sections[i]][j].teacher][day][slot] == 0) && (currentTT[day][slot] == 0)){
						daySlots.push(slot);
					}	
				}
				availSlots.push(daySlots);
			}

			//console.log(sections[i], j, availSlots);

		}									
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
rand([[1,2,3,4], [1,2,3,4], [1,2,3,4]], 3)