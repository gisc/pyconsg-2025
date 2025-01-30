webpackJsonp([0x745025ef4bd4],{75:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=n(2),u=a(i),s=n(14),c=n(23),m=a(c),d=function(e){function t(){return l(this,t),o(this,e.apply(this,arguments))}return r(t,e),t.prototype.renderSubTalks=function(e){return e?e.map(function(e){return u.default.createElement("p",{key:e.title},u.default.createElement("b",null,e.title),u.default.createElement("br",null),u.default.createElement("i",null,"by ",e.speaker),", ",e.job)}):null},t.prototype.renderSchedule=function(e){var t=this;return e.map(function(e){return"break"===e.type?u.default.createElement("tr",{key:e.title},u.default.createElement("td",null,u.default.createElement(s.Row,null,u.default.createElement(s.Col,{xs:"12",sm:"3"},e.time),u.default.createElement(s.Col,{xs:"12",sm:"9"},u.default.createElement("b",null,e.title),e.url&&u.default.createElement("p",null,u.default.createElement(m.default,{to:e.url},e.urlText)),e.subtitle&&u.default.createElement("p",null,u.default.createElement("i",null,e.subtitle)))))):u.default.createElement("tr",{key:e.title},u.default.createElement("td",null,u.default.createElement(s.Row,null,u.default.createElement(s.Col,{xs:"12",sm:"3"},u.default.createElement("p",null,e.time)),u.default.createElement(s.Col,{xs:"12",sm:"9"},u.default.createElement("b",null,e.title),u.default.createElement("br",null),!!e.speaker&&u.default.createElement("i",null,"by ",e.speaker),!!e.job&&u.default.createElement("span",null,", ",e.job),"workshops"===e.type&&u.default.createElement("p",null,u.default.createElement(m.default,{to:"/workshops/"},"Learn more about workshops here...")),t.renderSubTalks(e.talks),!!e.subtitle&&u.default.createElement("i",null,e.subtitle),!!e.abstract&&u.default.createElement("p",null,u.default.createElement("br",null),e.abstract)))))})},t.prototype.render=function(){var e=this.props.talks;return u.default.createElement(s.Table,{striped:!0},u.default.createElement("tbody",null,this.renderSchedule(e)))},t}(i.Component);t.default=d,e.exports=t.default},45:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){return e.raw=t,e}t.__esModule=!0;var o=l(["\n  max-width: 600px;\n  list-style-type: none;\n  & > li {\n    margin-bottom: 1em;\n  }\n"],["\n  max-width: 600px;\n  list-style-type: none;\n  & > li {\n    margin-bottom: 1em;\n  }\n"]),r=n(17),i=a(r),u=i.default.ul(o);t.default=u,e.exports=t.default},225:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=(n(14),n(13)),o=a(l),r=n(2),i=a(r),u=n(17),s=(a(u),n(11)),c=a(s),m=n(45),d=(a(m),n(75)),p=a(d),f=[{time:"8:00am",speaker:"",title:"Registration & Breakfast",type:"break"},{time:"8:50am",speaker:"Dr Liew Beng Keat",job:"Deputy Director at Republic Polytechnic, BDFL PyCon APAC",title:"Opening"},{time:"9:00am",speaker:"Mr Lee Tsung-Hsien",job:"Staff Software Engineer at Toyota Research Institute, co-author of Elements of Programming Interviews in C++/Java/Python",title:"Learning programming and problem solving through solving algorithm problems"},{time:"9:30am",speaker:"Mr Dean Ang Ngee Keng",job:"Senior Computing Teacher at School of Science and Technology, Singapore",title:"from python import magic - The Magic of Teaching Python using Python"},{time:"10:00am",speaker:"Mr Calvin Heng",job:"Computing teacher at Zhonghua Secondary School",title:"Computing @ Zhonghua Secondary"},{time:"10:30am",speaker:"Mr V Surya",job:"Computing teacher at Jurong West Secondary School",title:"From Coders to Raiders, using Repl.it - A Story-based Approach to Teaching Python"},{time:"11:00am",speaker:"Prof Ben Leong",job:"Associate Professor at National University of Singapore, Director at MOE Experimental Systems & Technology Lab",title:"Teaching Python to Working Adults"},{time:"11:30am",speaker:"Dr Norman Lee",job:"Senior Lecturer at Singapore University of Technology and Design",title:"Digital World Evolved - Machine Learning Powered"},{time:"12:00pm",title:"Group Photo & Lunch & Networking",subtitle:"with Prof Leong Hon Wai, Associate Professor at National University of Singapore School of Computing"},{time:"1:00pm",title:"Lightning Talks",subtitle:"(slots available)",talks:[{title:"2D Challenge – Pedagogy for Multidisciplinary Computing Assignment",speaker:"Dr Oka Kurniawan",job:"Senior Lecturer at Singapore University of Technology and Design"},{title:"Teaching AI Concepts with Python and Project Malmo",speaker:"Dr Melvin Zhang",job:"Computational Thinkerer at Computational Thinkerers"}]},{time:"1:30pm",speaker:"Ms Juliana Ung",job:"Founder and educator at LCCL Coding Academy",title:"Growth in a Coding Classroom: A Mindset Perspective"},{time:"2:00pm",speaker:"Dr Chen Weiqiang",job:"Lecturer at Eunoia Junior College",title:"Experiences in developing students for coding, data science and artificial intelligence"},{time:"2:30pm",speaker:"Mr Praveen Patil",job:"Physics Lecturer at GSS Belgaum, maintainer of SPOSH Code2Learn repository",title:"Python for Experiential Learning in STEAM"},{time:"3:00pm",speaker:"Mr Tamim Shahriar",job:"Engineering Manager, Grab, author of bestselling children programming books in Bangladesh",title:"Python vs C - Experience in implementing data structures and algorithms"},{time:"3:30pm",speaker:"Mr Alvin Ho",job:"CoderDojo @ Nee Soon East Community Club",title:"CoderDojo @ SG"},{time:"4:00pm",speaker:"",job:"",title:"Panel Discussion & AUA (Ask Us Anything)"},{time:"5:00pm",speaker:"",job:"",title:"Lucky Draw & Closing"}],g=function(){return i.default.createElement("div",{className:"container"},i.default.createElement(o.default,null,i.default.createElement("title",null,"Education Summit | PyCon APAC 2018")),i.default.createElement(c.default,null,i.default.createElement("h1",null,"Education Summit @LT15, NUS School of Computing"),i.default.createElement("p",null,"On ",i.default.createElement("b",null,"31 May 2018"),", PyCon APAC 2018 will hold an Education Summit, a gathering of educators focused on bringing computational thinking and coding literacy, through Python, to the classroom and the community. We invite passionate educators to join the discussion, share insights, learn things and build networks! We are looking for educators from various domains: authors, schools, tertiary institutions, non-profit community-based programmes, and government.")),i.default.createElement(c.default,null,i.default.createElement("h1",null,"Schedule"),i.default.createElement(p.default,{talks:f})),i.default.createElement(c.default,null,i.default.createElement("h1",null,"Attending"),i.default.createElement("p",null,"If you are interested in participating in the Education Summit, please register at ",i.default.createElement("a",{href:"https://tinyurl.com/pyconapac18edusummit"},"tinyurl.com/pyconapac18edusummit"),". Registration is open untill Friday, 18 May 2018 or when slots run out. Participation in the Education Summit is free (thanks to our sponsors) but as this is an invite-only for-educators event, only eligible participants will be confirmed via email. If you have a question, please contact"," ",i.default.createElement("a",{href:"mailto:pyedu@computing.sg"},"pyedu@computing.sg"))))};t.default=g,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-edu-summit-js-d9ab154e147c1bbe4a6a.js.map