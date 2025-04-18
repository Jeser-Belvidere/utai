import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import Flickity from 'flickity';

const userLang = navigator.language || navigator.userLanguage;
const zhRegExp = /zh/;
const isChineseUserLang = zhRegExp.test(userLang);

const requestURL = 'https://example.com'


const engDictionary = {
  //HEADER
  about_nav: "About us",
  language_btn: '简体中文',
  products_nav: 'Areas',
  contacts_nav: 'Contact us',
  //HOME
  home_text1: `
      UTAY COMPANY LIMITED is an international company established in 2024 purposely providing international trading,
      exporting and importing goods. We pursuit to cover wide list of needs of domectic and international customers
      because it is involved in diverse trading areas.
      `,
  //ABOUT
  about_title_1: 'GOAL',
  about_description_1: `
      Our goal is trading with industrial equipment, spare parts for it, other industrial goods for
      production in various fields all over the world and its' massive distribution by cooperation with large and medium-sized
      trading companies, manufacturers, factories and trading all over the world. Our business is oriented on
      suppliers and customers located throughout Central Asia, China, Continental Europe and other countries and
      regions.
      `,
  about_title_2: 'MISSION',
  about_description_2: `
      Our mission is to simplify business international trading and create well-appointed system of
      exporting and importing goods.
      `,
  about_title_3: 'BUSINESS',
  about_description_3: `
      UTAY COMPANY LIMITED act as an international merchant of industrial machinery used in various fields such as
      machines, conveyors, spare parts for industrial machinery and spare parts used for industrial manufacturing.
      `,
  //PRODUCTS
  product_title: 'AREAS',
  industry_product: 'Light manufacturing <br/> and consumer goods production',
  food_product: 'Food <br/> industry',
  mechanical_product: 'Mechanical <br/> engineering',
  industry_product_mob: 'Light manufacturing <br/> and consumer goods production',
  food_product_mob: 'Food <br/> industry',
  mechanical_product_mob: 'Mechanical <br/> engineering',
  //CONTACTS
  contacts_title: 'CONTACT US',
  firstname_label: 'First name *',
  lastname_label: 'Last name *',
  email_label: 'Email *',
  mobilephone_label: 'Mobile Phone *',
  notes_label: 'Notes',
  submit_btn: 'Submit',
  reset_btn: 'Reset'
};

const cnDictionary = {
  //NAVIGATION
  about_nav: "关于我们",
  language_btn: 'English',
  products_nav: '商业领域',
  contacts_nav: '联系我们',
  //HOME
  home_text1: `UTAY COMPANY LIMITED是一家成立于2024年的国际公司, 专门提供国际贸易、进出口货物.`,
  //ABOUT
  about_title_1: '目标',
  about_description_1: `我们的目标是与世界各地的大中型贸易公司、制造商、工厂和贸易公司合作, 在世界各地进行工业设备、备件、其他工业产品的贸易，并进行大规模分销。我们的业务面向位于中亚、中国、欧洲大陆和其他国家和地区的供应商和客户.`,
  about_title_2: '使命',
  about_description_2: '我们的使命是简化商业国际贸易, 建立完善的进出口货物体系.',
  about_title_3: '商业',
  about_description_3: 'UTAY COMPANY LIMITED是一家国际贸易商, 经营各种领域的工业机械, 如机器、输送机、工业机械备件和工业制造备件.',
  //PRODUCTS
  product_title: '商业领域',
  industry_product_mob: '轻工业及消费品制造',
  food_product_mob: '食品产业',
  mechanical_product_mob: '机械工程',
  industry_product: '轻工业及消费品制造',
  food_product: '食品产业',
  mechanical_product: '机械工程',
  //CONTACTS
  contacts_title: '联系我们',
  firstname_label: '名字 *',
  lastname_label: '姓 *',
  email_label: '电子邮箱 *',
  mobilephone_label: '电话号码 *',
  notes_label: '笔记',
  submit_btn: '提交',
  reset_btn: '重置'
};

// zn | en
let currentLang = "en";

const onLanguageChange = () => {
  if (currentLang === "zn") {
    for (let key of Object.keys(engDictionary)) {
      document.getElementById(key).innerHTML = engDictionary[key];
    }
    currentLang = "en";
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    return;
  }

  if (currentLang === "en") {
    for (let key of Object.keys(cnDictionary)) {
      document.getElementById(key).innerHTML = cnDictionary[key];
    }
    currentLang = "zn";
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    return;
  }
};

document.addEventListener('DOMContentLoaded', () => {
  if (isChineseUserLang) {
    onLanguageChange();
  }
})


document
  .getElementById("language_btn")
  .addEventListener("click", (e) => onLanguageChange(e));

// Slider

const flkt = new Flickity('.main-carousel', {

})



const productsWrapper = document.getElementById('products-wrapper')
let curr = 0

document.getElementById('slide-left').addEventListener('click', (event) => {
  if (curr === 0) return
  if (curr - 1 === 0) {
    productsWrapper.scrollLeft = 0
    curr--
    return
  }

  const size = (productsWrapper.scrollWidth - productsWrapper.clientWidth) / (productsWrapper.children.length - 1)
  productsWrapper.scrollLeft -= size
  curr--
})

document.getElementById('slide-rigth').addEventListener('click', (event) => {
  if (curr === productsWrapper.children.length - 1) {
    productsWrapper.scrollLeft = productsWrapper.scrollWidth - productsWrapper.clientWidth
    return
  }

  const size = (productsWrapper.scrollWidth - productsWrapper.clientWidth) / (productsWrapper.children.length - 1)

  productsWrapper.scrollLeft += size
  curr++
})

//Contacts form
const firstnameInput = document.getElementById('firstname')
const lastnameInput = document.getElementById('lastname')
const emailInput = document.getElementById('email')
const mobilephoneInput = document.getElementById('mobilephone')
const notesInput = document.getElementById('notes')

const requiredFields = [firstnameInput, lastnameInput, emailInput, mobilephoneInput]

document.getElementById('contacts-form').addEventListener('submit', (event) => {
  event.preventDefault()
  for (let requiredField of requiredFields) {
    if (!requiredField.value) {
      requiredField.classList.add("invalid");
      requiredField.focus()
      return
    } else {
      requiredField.classList.remove("invalid")
    }
  }

  const data = {
    firstname: firstnameInput.value.trim(),
    lastname: lastnameInput.value.trim(),
    email: emailInput.value.trim(),
    phone: mobilephoneInput.value.trim(),
    notes: notesInput.value.trim()
  }

  console.dir(data)
  fetch(requestURL, {
    method: 'POST'
  }).then(() => {
    Toastify({
      text: currentLang === 'zn' ? '请求已成功发送' : 'The request was successfully sent',
      duration: 3000,
      gravity: "bottom",
      position: "center",
      style: {
        background: "#44454b",
      },
    }).showToast();
  }).catch((error) => {
    Toastify({
      text: currentLang === 'zn' ? '出了点问题' : 'Something went wrong',
      duration: 3000,
      gravity: "bottom",
      position: "center",
      style: {
        background: "#752121",
      },
    }).showToast();
    console.error(new Error(JSON.stringify(error)))
  })
})
