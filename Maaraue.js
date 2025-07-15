(function () {
  function getRndNum(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
  }
  for (let x = 0; x < 120; x += getRndNum(2, 6)) {
    let rndNum = getRndNum(70, 100);
    let el = document.createElement("div");
    el.classList.add("grass");
    el.style.width = rndNum + "vmin";
    el.style.height = rndNum + "vmin";
    for (let y = 0; y < 3; y++) {
      let blade = document.createElement("div");
      blade.classList.add("grass__blade--" + (y + 1));
      blade.classList.add("grass__blade");
      blade.style.setProperty("animation-delay", x + "0ms");
      el.appendChild(blade);
    }
    el.style.left = x + "vw";
    document.querySelector("body").appendChild(el);
  }
})();

setTimeout(() => {
  let cardWrapper = document.querySelector(".card__wrapper");

  cardWrapper.classList.remove(".hide");
  cardWrapper.style.display = "flex";
}, 10000);

const MaaraueArray = [
  {
    card__title: "Outdoor pool",
    card__image: "images/Aue1.jpg",
    card__description:
      "The Maaraue outdoor pool welcomes many bathers, both big and small. It's clear: Here, maximum stands for true size. The Maaraue invites you to indulge in a generous 50,000 square meters of    sunbathing areas, has numerous play and sports areas for active       guests, and offers immense water fun with a 50-meter swimming             pool, diving bay, 75-meter non-swimmer pool, and a spacious     paddling area. What's more, the Maaraue outdoor pool offers         barrier-free access.",
    card__more: "https://www.mattiaqua.de/baeder/maaraue/",
  },
  {
    card__title: "Allotment gardens",
    card__image: "images/Aue2.jpg",
    card__description:
      "Allotment gardens, also known as allotment gardens, have a long tradition in Germany, dating back to the 19th century. The first known allotment garden was established in Leipzig in 1864 to provide urban workers with a means of self-sufficiency and recreation. Over time, allotment gardens became increasingly popular, especially after the First World War, as urbanization increased and people sought green oases. Today, there are over 1.4 million allotment gardens in Germany, used by around 800,000 people. ",
    card__more:
      "https://cdn.pixabay.com/photo/2010/12/07/08/allotment-1059_640.jpg",
  },
  {
    card__title: "Rheinschanze - Restaurant",
    card__image: "images/Aue3.jpg",
    card__description:
      "The Maaraue, a peninsula at the confluence of the Main and Rhine rivers, was already an important location in the Middle Ages. The most famous historical reference is the Mainz Court Day, held by Emperor Frederick I Barbarossa at Pentecost 1184. This festival, described as one of the most magnificent events of the Middle Ages, attracted numerous crowned heads and knights from all over Europe. Today, there are various restaurants on the Maaraue, including the Rheinschanze, the 12er Restaurant, and the Bootshaus am Rhein restaurant.",
    card__more: "https://www.rheinschanze-maaraue.de/",
  },
  {
    card__title: "Boatyard",
    card__image: "images/Aue4.jpg",
    card__description:
      "Boatyards specialize in the construction, repair, and maintenance of boats and vessels. They ensure that boats remain safe and operational by repairing cracks, servicing engines, and maintaining surfaces. They also often offer storage and winter services for boats to protect them from the elements. Overall, boatyards help ensure the safety and longevity of watercraft.",
    card__more: "https://bootswerft-kaufmann.hier-im-netz.de/",
  },
  {
    card__title: "Campsite Maaraue",
    card__image: "images/Aue5.jpg",
    card__description:
      "The campsite is located on the Maaraue, an island in the Rhine, opposite Mainz. It is known for its riverside location and proximity to Mainz, making it a popular spot for tourists. The campsite offers modern facilities, a bar, a café, and the option to order bread rolls. It is well connected to the cycle path and easily accessible by bike to Mainz.",
    card__more: "https://www.rheinhessen.de/en/a-international-camping-maaraue",
  },
  {
    card__title: "Water Police Maaraue",
    card__image: "images/Aue6.jpg",
    card__description:
      "The Water Police has various tasks, including monitoring shipping traffic on inland waterways, ensuring the safety and smooth flow of traffic, and prosecuting crimes and administrative offenses in the area of shipping.",
    card__more:
      "https://hbpp.polizei.hessen.de/binarywriterservlet?imgUid=6d2054d8-3295-8712-6bda-13300b9ef7c4&uBasVariant=11111111-1111-1111-1111-111111111111",
  },
  {
    card__title: "Sports clubs",
    card__image: "images/Aue8.jpg",
    card__description:
      "The Maaraue River is home to various sports and playgrounds, a dog club, and many water sports clubs. Among them are the Mainz-Kostheim Canoe Club 1924, the Kostheim Sports Club 1912, the Kostheim Athletes' Club 1898, the TuS 05 Kostheim, and the Kastel Rowing and Canoeing Society 1880 (KRKG).",
    card__more: "https://www.kcmk.de/",
  },
  {
    card__title: "Parks",
    card__image: "images/Aue9.jpg",
    card__description:
      "The park extends beyond the Maaraue along the Rhine to the Theodor Heuss Bridge. The name Maaraue contains the Old High German «marh» (warhorse). The Maaraue itself was often the setting for royal court days in the Middle Ages. The  «morawa» is first mentioned as a meeting place in December 1073; however, meetings of kings and emperors probably took place there earlier. The most splendid festival that the Maaraue has ever seen was the great Mainz Court Day (May 20–22, 1184): The German Emperor Frederick Barbarossa celebrated Whitsun on the Maaraue with 70 princes and a large entourage. ",
    card__more:
      "https://kulturerbeunterwegs.kaiser2020.de/en/themen/auf-den-spuren-der-kaiser/ritter-adel/maaraue/",
  },
  {
    card__title: "Kastel`s Beach",
    card__image: "images/Aue11.jpg",
    card__description:
      "Just before the Theodor Heuss Bridge, next to the Schönborn Bastion (a restaurant with a beer garden), is Kastel Beach. There, you can enjoy a glass of wine or a beer in a sun lounger while listening to soft music. While you can dip your feet in the water, swimming in the Rhine is not recommended due to the strong undercurrents, as this is life-threatening.",
    card__more: "https://www.bastion-von-schoenborn.de/",
  },
  {
    card__title: "Kastel`s Reduit",
    card__image: "images/Aue12.jpg",
    card__description:
      "The Reduit in Mainz-Kastel was built between 1830 and 1834 as part of the Federal Fortress of Mainz and originally served as a defensive barracks. The two-story structure, with crenellated walls and bastions, was founded on a pile grid and was strategically positioned along the Rhine and near the bridge leading to Mainz. During the German Confederation, the barracks was occupied by Prussian and Austrian soldiers; later, the 2nd Nassau Infantry Regiment No. 88 was stationed there around 1900. Today, the Reduit houses clubs, a youth center, and the Castellum Museum, while the courtyard is used for events such as open-air cinemas in the summer.",
    card__more: "https://de.wikipedia.org/wiki/Reduit_(Mainz-Kastel)",
  },
];
let cardTitle = document.querySelector(".card__title");
let cardImage = document.querySelector(".card__image");
let readMore = document.querySelector(".card__more");
let cardDescription = document.querySelector(".card__description");
let count = 0;

function nextAttraction() {
  console.log("next clicked");
  if (count < MaaraueArray.length) {
    count += 1;
  } else {
    count = 0;
  }
  setData(count);
}
function previousAttraction() {
  console.log("prev clicked");
  if (count > 0) {
    count -= 1;
  } else {
    count = MaaraueArray.length;
  }
  setData(count);
}
function setData(count) {
  cardTitle.textContent = MaaraueArray[count].card__title;
  readMore.setAttribute("href", MaaraueArray[count].card__more);
  cardImage.setAttribute("src", MaaraueArray[count].card__image);
  cardDescription.textContent = MaaraueArray[count].card__description;
}
