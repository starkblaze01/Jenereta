// Function to generate the best possible timetable.

const crypto = require("crypto");

const ranD = async (slots, count) => {
  let i;
  let viableDays = [];
  for (i in slots) {
    if (slots[i].length >= count) {
      viableDays.push(i);
    }
  }

  if (viableDays.length === 0) return null;

  let buff = crypto.randomBytes(2);
  let n = parseInt(buff.toString("hex"), 16);
  //console.log(n);

  let index = n % viableDays.length;
  let day = viableDays[index];
  let slot = [];

  for (i = 0; i < count; i++) {
    buff = crypto.randomBytes(2);
    n = parseInt(buff.toString("hex"), 16);

    let s = n % slots[day].length;
    slot.push(slots[day][s]);
    slots[day].splice(s, 1);
    s = null;
  }
  buff = null;
  n = null;
  viableDays = null;
  i = null;
  index = null;
  //console.log("d/s ",day,slot)
  return { day, slot };
};

export const generate = async (instaces, givenSlots, teachers, sections) => {
  let secInstances = {};
  let i, j;
  let TT = [];
  let secTT = {};
  let teacherTT = {};

  let numDays = 0;
  givenSlots.forEach(x => {
    if (x > 0) numDays++;
  });

  //console.log("num " , numDays);
  for (i in sections) {
    let mapp = givenSlots.map(x => {
      let z = [];
      for (let j = 0; j < x; j++) {
        z.push(0);
      }
      return z;
    });
    secInstances[sections[i]] = [];
    secTT[sections[i]] = mapp;
    mapp = null;
    j = null;
  }

  for (i in teachers) {
    let mapp = givenSlots.map(x => {
      let z = [];
      for (let j = 0; j < x; j++) {
        z.push(0);
      }
      return z;
    });
    teacherTT[teachers[i]] = mapp;
    mapp = null;
    j = null;
  }

  for (i in sections) {
    for (j in instaces) {
      for (let k in instaces[j].sections) {
        if (instaces[j].sections[k] === sections[i]) {
          instaces[j]["mapp"] = [];
          secInstances[sections[i]].push(instaces[j]);
        }
      }
    }
  }

  //console.log("sec ",secInstances, "tech " , teacherTT , "sec ", secTT);
  let regenerateCountSec = 0;
  let regenerateFlagSec = false;
  let regenerateListSec = {};
  let notPossibleCount = 0;
  let impossible = false;
  for (i = 0; i < sections.length; i++) {
    if (impossible) {
      console.log("Table Not Possible");
      break;
    }
    let notPossible = false;
    let currentTT = givenSlots.map(x => {
      let z = [];
      for (let j = 0; j < x; j++) {
        z.push(0);
      }
      return z;
    });
    let regenerateCountSI = 0;
    let regenerateFlagSI = false;
    let regenerateListSI = {};
    for (j = 0; j < secInstances[sections[i]].length; j++) {
      //console.log("hey","i \t" , i, "j \t" ,j)
      let availSlots = [];
      for (let day = 0; day < givenSlots.length; day++) {
        let daySlots = [];
        for (let slot = 0; slot < givenSlots[day]; slot++) {
          if (regenerateFlagSI) {
            //console.log("regenerateFlagSI", regenerateFlagSI, "	regenerateListSI", regenerateListSI)
            let slotFlag = true;
            for (let a in regenerateListSI.slot) {
              let dumFlag = false;
              for (let b in slot) {
                if (slot[b] === regenerateListSI.slot[a]) {
                  dumFlag = true;
                  break;
                }
              }
              if (!dumFlag) {
                slotFlag = false;
                break;
              }
            }
            if (
              (!slotFlag || day !== regenerateListSI.day) &&
              teacherTT[secInstances[sections[i]][j].teacher][day][slot] ===
                0 &&
              currentTT[day][slot] === 0
            ) {
              daySlots.push(slot);
            }
            regenerateFlagSI = false;
          } else if (regenerateFlagSec) {
            let slotFlag = true;
            for (let a in regenerateListSI.slot) {
              let dumFlag = false;
              for (let b in slot) {
                if (slot[b] === regenerateListSI.slot[a]) {
                  dumFlag = true;
                  break;
                }
              }
              if (!dumFlag) {
                slotFlag = false;
                break;
              }
            }

            if (
              (!slotFlag || day !== regenerateListSec.day) &&
              teacherTT[secInstances[sections[i]][j].teacher][day][slot] ===
                0 &&
              currentTT[day][slot] === 0
            ) {
            }
            regenerateFlagSec = false;
          } else if (
            teacherTT[secInstances[sections[i]][j].teacher][day][slot] === 0 &&
            currentTT[day][slot] === 0
          ) {
            daySlots.push(slot);
          }
        }
        availSlots.push(daySlots);
      }
      //console.log(sections[i], j,"avai\t" , availSlots);

      let eachDay = Math.floor(
        secInstances[sections[i]][j].numLectures / numDays
      );
      let extraDays = secInstances[sections[i]][j].numLectures % numDays;

      for (let x = 0; x < numDays; x++) {
        let count;
        if (extraDays > 0) {
          count = eachDay + 1;
          extraDays--;
        } else {
          count = eachDay;
        }

        let flag = true;
        let radCount = 0;
        while (flag) {
          //console.log("call", availSlots,count)
          const ret = await ranD(availSlots, count);
          //console.log("ret", ret)
          //console.log("tt", currentTT)
          if (
            ret !== undefined &&
            ret != null &&
            ret.day !== undefined &&
            ret.slot !== undefined &&
            ret.day >= 0 &&
            ret.day < givenSlots.length &&
            ret.slot.length === count
          ) {
            secInstances[sections[i]][j].mapp.push({
              day: ret.day,
              slot: ret.slot
            });
            for (let z in ret.slot) {
              currentTT[ret.day][ret.slot[z]] = secInstances[sections[i]][j];
              teacherTT[secInstances[sections[i]][j].teacher][ret.day][
                ret.slot[z]
              ] = secInstances[sections[i]][j];
            }
            availSlots[ret.day] = [];
            flag = false;
          } else {
            if (radCount < 10) {
              //console.log("rad", radCount,j)
              radCount++;
            } else if (regenerateCountSI < 100) {
              regenerateCountSI++;
              flag = false;
              regenerateFlagSI = true;
              if (secInstances[sections[i]][j].mapp[0] === undefined) {
                regenerateListSI = { day: null, slot: null };
              } else {
                regenerateListSI = secInstances[sections[i]][j].mapp[0];
              }
              //console.log("regSI",regenerateCountSI, regenerateCountSI, regenerateListSI)
              //console.log("hey","i \t" , i, "j \t" ,j)
              for (let y in secInstances[sections[i]][j].mapp) {
                for (let w in secInstances[sections[i]][j].mapp.slot) {
                  currentTT[secInstances[sections[i]][j].mapp[y].day][
                    secInstances[sections[i]][j].mapp[y].slot[w]
                  ] = 0;
                  teacherTT[secInstances[sections[i]][j].teacher][
                    secInstances[sections[i]][j].mapp[y].day
                  ][secInstances[sections[i]][j].mapp[y].slot[w]] = 0;
                }
              }
              secInstances[sections[i]][j].mapp = [];
              j--;
            } else {
              if (regenerateCountSec < 100) {
                //console.log("regenerateCountSec",regenerateCountSI, regenerateCountSec)
                regenerateCountSI = 0;
                regenerateCountSec++;
                regenerateFlagSec = true;
                flag = false;
                if (secInstances[sections[i]][j].mapp[0] === undefined) {
                  regenerateListSec = { day: null, slot: null };
                } else {
                  regenerateListSec = secInstances[sections[i]][0].mapp[0];
                }
                for (let x in secInstances[sections[i]]) {
                  for (let y in secInstances[sections[i]][x].mapp) {
                    for (let w in secInstances[sections[i]][x].mapp.slot) {
                      teacherTT[secInstances[sections[i]][x].teacher][
                        secInstances[sections[i]][x].mapp[y].day
                      ][secInstances[sections[i]][x].mapp[y].slot[w]] = 0;
                    }
                  }
                }
                for (x in secInstances[sections[i]])
                  secInstances[sections[i]][x].mapp = [];
                i--;
              } else {
                if (notPossibleCount < 20) {
                  flag = false;
                  regenerateCountSec = 0;
                  console.log("iterationCount", notPossibleCount);
                  notPossible = true;
                  notPossibleCount++;
                  i = -1;
                  TT = [];
                  teacherTT = {};
                  secTT = {};
                  currentTT = [];
                  for (let u in sections) {
                    let mapp = givenSlots.map(x => {
                      let z = [];
                      for (let w = 0; w < x; w++) {
                        z.push(0);
                      }
                      return z;
                    });
                    secInstances[sections[u]] = [];
                    secTT[sections[u]] = mapp;
                    mapp = null;
                  }

                  for (let u in teachers) {
                    let mapp = givenSlots.map(x => {
                      let z = [];
                      for (let w = 0; w < x; w++) {
                        z.push(0);
                      }
                      return z;
                    });
                    teacherTT[teachers[u]] = mapp;
                    mapp = null;
                  }
                  for (let u in sections) {
                    for (let v in instaces) {
                      for (let w in instaces[v].sections) {
                        if (instaces[v].sections[w] === sections[u]) {
                          instaces[v]["mapp"] = [];
                          secInstances[sections[u]].push(instaces[v]);
                        }
                      }
                    }
                  }
                  //console.log("not" , " ", i, " ", j)
                } else {
                  impossible = true;
                  flag = false;
                }
              }
            }
          }
        } // flag
        if (
          impossible ||
          notPossible ||
          regenerateFlagSec ||
          regenerateFlagSI
        ) {
          // console.log("break1", i, j);
          break;
        }
      } // numdays
      // console.log("pos2", impossible, notPossibleCount);
      if (impossible || notPossible || regenerateFlagSec) {
        //  console.log("break2", i, j);
        break;
      }
    } // j
    /*								
		if(currentTT[0] != undefined)
			console.log("CURR",currentTT[0][0].sections , impossible, regenerateFlagSec, notPossible, i,j)
		*/
    if (!impossible && !regenerateFlagSec && !notPossible) {
      TT.push(currentTT);
      secTT[sections[i]] = currentTT;
    }
    if (notPossible) {
      notPossible = false;
    }
    if (impossible) {
      // console.log("Could not generate in this case, please refresh/restart.\n");
      return TT = null;
      /*
      for (let u in TT) {
        for (let v in TT[u]) {
          for (let w in TT[u][v]) {
            console.log(
              "ptt",
              TT[u][v][w],
              TT[u][v][w].sections,
              TT[u][v][w].mapp,
              "u ",
              u,
              "v ",
              v,
              "w ",
              w
            );
          }
        }
      } */
    }
    //  console.log("iii");
  } // i

  // for (let u in TT) {
  //   for (let v in TT[u]) {
  //     for (let w in TT[u][v]) {
  //       console.log(
  //         "tt",
  //         TT[u][v][w],
  //         TT[u][v][w].sections,
  //         "section ",
  //         u,
  //         "day ",
  //         v,
  //         "slot ",
  //         w
  //       );
  //     }
  //   }
  // }
  // console.log(TT);

  //console.log("TT",TT[1], notPossibleCount)
  /*
	console.log("TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT\n");
	
	for(let i in teacherTT["T1"]){
		for(let j in teacherTT["T1"][i]){
				console.log(teacherTT["T1"][i][j], teacherTT["T1"][i][j].sections, teacherTT["T1"][i][j].mapp, j, k)
		}
	}		
  */
  return TT;
};

// generate(
//   [
//     {
//       teacher: "T1",
//       sections: ["12A"],
//       subject: "English",
//       numLectures: "12",
//       numLabs: null
//     },
//     {
//       teacher: "T2",
//       sections: ["12A"],
//       subject: "Hindi",
//       numLectures: "11",
//       numLabs: null
//     },
//     {
//       teacher: "T3",
//       sections: ["12A"],
//       subject: "Maths",
//       numLectures: "11",
//       numLabs: null
//     },
//     {
//       teacher: "T1",
//       sections: ["12A"],
//       subject: "Science",
//       numLectures: "11",
//       numLabs: null
//     },
//     {
//       teacher: "T1",
//       sections: ["12B"],
//       subject: "English",
//       numLectures: "11",
//       numLabs: null
//     },
//     {
//       teacher: "T2",
//       sections: ["12B"],
//       subject: "Hindi",
//       numLectures: "11",
//       numLabs: null
//     },
//     {
//       teacher: "T3",
//       sections: ["12B"],
//       subject: "Maths",
//       numLectures: "12",
//       numLabs: null
//     },
//     {
//       teacher: "T1",
//       sections: ["12B"],
//       subject: "Science",
//       numLectures: "11",
//       numLabs: null
//     }
//   ],
//   [8, 8, 8, 8, 8, 5],
//   ["T1", "T2", "T3", "T4", "T5", "T6"],
//   ["12A", "12B"]
// );

/*
let x = [[1,2], [1,2,3,4], [1,2,3,4]];
ranD(x, 3)
console.log("bahar" , x)
*/
