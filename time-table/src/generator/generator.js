// Function to generate the best possible timetable.

const instaces = [{
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
}]

const sections = ["12A", "12B"];
const teachers = ["T1", "T2", "T3", "T4", "T5", "T6"];
const slots = [8,8,8,8,8,8,5];


//const generate = async (instaces, slots, teachers, sections) => {
	
	let secTeachers  = {};	
	let i,j,k;
	for (i in sections){
		secTeachers[sections[i]] = [];
	}

	console.log(secTeachers);
	
	for (i in sections){
		for(j in instaces){
			for(let k in instaces[j].sections){ 
				if(instaces[j].sections[k] == sections[i]){
					secTeachers[sections[i]].push(instaces[j].teacher);
				}
			}	
		}
	}

	console.log(secTeachers)
//}

