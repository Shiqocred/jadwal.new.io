const container = document.querySelector('.container');

for ( var i = 1; i<=100; i++) {
				const blocks = document.createElement('div');
				blocks.classList.add('block');
				container.appendChild(blocks);
};

function generate() {
				anime({
								targets: '.block',
								translateX: function(){
												return anime.random(-1000,1000);
								},
								translateY: function(){
												return anime.random(-1000,1000);
								},
								scale: function(){
												return anime.random(0,8);
								},
								
								easing: 'linear',
								duration: 3000,
								delay: anime.stagger(10),
								complete: generate,
				})
};


const ni_m = document.querySelector('.ni_m');
const nam_a = document.querySelector('.nam_a');
const duo = document.querySelector('.duo');
const playe_r = document.querySelector('.player1')
const player_2 = document.querySelector('.player2')
const to_p = document.querySelector('.to_p')
const a = document.querySelector('.a')
const c = document.querySelector('.c')
const d = document.querySelector('.d')
const f = document.querySelector('.f')
const g = document.querySelector('.g')
const h = document.querySelector('.h')
const m = document.querySelector('.m')
const n = document.querySelector('.n')
const p = document.querySelector('.p')
const r = document.querySelector('.r')
const s = document.querySelector('.s')
const t = document.querySelector('.t')
const u = document.querySelector('.u')

const ah = document.querySelector('.ah')
const ch = document.querySelector('.ch')
const dh = document.querySelector('.dh')
const fh = document.querySelector('.fh')
const gh = document.querySelector('.gh')
const hh = document.querySelector('.hh')
const mh = document.querySelector('.mh')
const nh = document.querySelector('.nh')
const ph = document.querySelector('.ph')
const rh = document.querySelector('.rh')
const sh = document.querySelector('.sh')
const th = document.querySelector('.th')
const uh = document.querySelector('.uh')


function nim_on(){
				ni_m.classList.add("active");
				nam_a.classList.remove("active");
				duo.style.display = "none";
				playe_r.style.display = "block";
}

function nim_off(){
				ni_m.classList.remove("active");
				nam_a.classList.add("active");
				duo.style.display = "flex";
				playe_r.style.display = "none";
}


ni_m.onclick = function (){
				nim_on();
				del()
				topFunction2()
}

nam_a.onclick = function (){
				nim_off();
				topFunction()
}


function a_h(){
				a.classList.add("active")
				c.classList.remove("active")
				d.classList.remove("active")
				f.classList.remove("active")
				g.classList.remove("active")
				h.classList.remove("active")
				m.classList.remove("active")
				n.classList.remove("active")
				p.classList.remove("active")
				r.classList.remove("active")
				s.classList.remove("active")
				t.classList.remove("active")
				u.classList.remove("active")
}

function c_h(){
				a.classList.remove("active")
				c.classList.add("active")
				d.classList.remove("active")
				f.classList.remove("active")
				g.classList.remove("active")
				h.classList.remove("active")
				m.classList.remove("active")
				n.classList.remove("active")
				p.classList.remove("active")
				r.classList.remove("active")
				s.classList.remove("active")
				t.classList.remove("active")
				u.classList.remove("active")
}

function d_h(){
				a.classList.remove("active")
				c.classList.remove("active")
				d.classList.add("active")
				f.classList.remove("active")
				g.classList.remove("active")
				h.classList.remove("active")
				m.classList.remove("active")
				n.classList.remove("active")
				p.classList.remove("active")
				r.classList.remove("active")
				s.classList.remove("active")
				t.classList.remove("active")
				u.classList.remove("active")
}

function f_h(){
				a.classList.remove("active")
				c.classList.remove("active")
				d.classList.remove("active")
				f.classList.add("active")
				g.classList.remove("active")
				h.classList.remove("active")
				m.classList.remove("active")
				n.classList.remove("active")
				p.classList.remove("active")
				r.classList.remove("active")
				s.classList.remove("active")
				t.classList.remove("active")
				u.classList.remove("active")
}

function g_h(){
				a.classList.remove("active")
				c.classList.remove("active")
				d.classList.remove("active")
				f.classList.remove("active")
				g.classList.add("active")
				h.classList.remove("active")
				m.classList.remove("active")
				n.classList.remove("active")
				p.classList.remove("active")
				r.classList.remove("active")
				s.classList.remove("active")
				t.classList.remove("active")
				u.classList.remove("active")
}

function h_h(){
				a.classList.remove("active")
				c.classList.remove("active")
				d.classList.remove("active")
				f.classList.remove("active")
				g.classList.remove("active")
				h.classList.add("active")
				m.classList.remove("active")
				n.classList.remove("active")
				p.classList.remove("active")
				r.classList.remove("active")
				s.classList.remove("active")
				t.classList.remove("active")
				u.classList.remove("active")
}

function m_h(){
				a.classList.remove("active")
				c.classList.remove("active")
				d.classList.remove("active")
				f.classList.remove("active")
				g.classList.remove("active")
				h.classList.remove("active")
				m.classList.add("active")
				n.classList.remove("active")
				p.classList.remove("active")
				r.classList.remove("active")
				s.classList.remove("active")
				t.classList.remove("active")
				u.classList.remove("active")
}

function n_h(){
				a.classList.remove("active")
				c.classList.remove("active")
				d.classList.remove("active")
				f.classList.remove("active")
				g.classList.remove("active")
				h.classList.remove("active")
				m.classList.remove("active")
				n.classList.add("active")
				p.classList.remove("active")
				r.classList.remove("active")
				s.classList.remove("active")
				t.classList.remove("active")
				u.classList.remove("active")
}

function p_h(){
				a.classList.remove("active")
				c.classList.remove("active")
				d.classList.remove("active")
				f.classList.remove("active")
				g.classList.remove("active")
				h.classList.remove("active")
				m.classList.remove("active")
				n.classList.remove("active")
				p.classList.add("active")
				r.classList.remove("active")
				s.classList.remove("active")
				t.classList.remove("active")
				u.classList.remove("active")
}

function r_h(){
				a.classList.remove("active")
				c.classList.remove("active")
				d.classList.remove("active")
				f.classList.remove("active")
				g.classList.remove("active")
				h.classList.remove("active")
				m.classList.remove("active")
				n.classList.remove("active")
				p.classList.remove("active")
				r.classList.add("active")
				s.classList.remove("active")
				t.classList.remove("active")
				u.classList.remove("active")
}

function s_h(){
				a.classList.remove("active")
				c.classList.remove("active")
				d.classList.remove("active")
				f.classList.remove("active")
				g.classList.remove("active")
				h.classList.remove("active")
				m.classList.remove("active")
				n.classList.remove("active")
				p.classList.remove("active")
				r.classList.remove("active")
				s.classList.add("active")
				t.classList.remove("active")
				u.classList.remove("active")
}

function t_h(){
				a.classList.remove("active")
				c.classList.remove("active")
				d.classList.remove("active")
				f.classList.remove("active")
				g.classList.remove("active")
				h.classList.remove("active")
				m.classList.remove("active")
				n.classList.remove("active")
				p.classList.remove("active")
				r.classList.remove("active")
				s.classList.remove("active")
				t.classList.add("active")
				u.classList.remove("active")
}

function u_h(){
				a.classList.remove("active")
				c.classList.remove("active")
				d.classList.remove("active")
				f.classList.remove("active")
				g.classList.remove("active")
				h.classList.remove("active")
				m.classList.remove("active")
				n.classList.remove("active")
				p.classList.remove("active")
				r.classList.remove("active")
				s.classList.remove("active")
				t.classList.remove("active")
				u.classList.add("active")
}

function del(){
				a.classList.remove("active")
				c.classList.remove("active")
				d.classList.remove("active")
				f.classList.remove("active")
				g.classList.remove("active")
				h.classList.remove("active")
				m.classList.remove("active")
				n.classList.remove("active")
				p.classList.remove("active")
				r.classList.remove("active")
				s.classList.remove("active")
				t.classList.remove("active")
				u.classList.remove("active")
}

player_2.onscroll = function() {
				scrollFunction()
				del()
};


const a_top = ah.offsetTop
function a_up(){
				player_2.scrollTop = a_top
}
const c_top = ch.offsetTop
function c_up(){
				player_2.scrollTop = c_top
}
const d_top = dh.offsetTop
function d_up(){
				player_2.scrollTop = d_top
}
const f_top = fh.offsetTop
function f_up(){
				player_2.scrollTop = f_top
}
const g_top = gh.offsetTop
function g_up(){
				player_2.scrollTop = g_top
}
const h_top = hh.offsetTop
function h_up(){
				player_2.scrollTop = h_top
}
const m_top = mh.offsetTop
function m_up(){
				player_2.scrollTop = m_top
}
const n_top = nh.offsetTop
function n_up(){
				player_2.scrollTop = n_top
}
const p_top = ph.offsetTop
function p_up(){
				player_2.scrollTop = p_top
}
const r_top = rh.offsetTop
function r_up(){
				player_2.scrollTop = r_top
}
const s_top = sh.offsetTop
function s_up(){
				player_2.scrollTop = s_top
}
const t_top = th.offsetTop
function t_up(){
				player_2.scrollTop = t_top
}
const u_top = uh.offsetTop
function u_up(){
				player_2.scrollTop = u_top
}


a.onclick = function (){
				a_up()
				a_h()
}
c.onclick = function (){
				c_up()
				c_h()
}
d.onclick = function (){
				d_up()
				d_h()
}
f.onclick = function (){
				f_up()
				f_h()
}
g.onclick = function (){
				g_up()
				g_h()
}
h.onclick = function (){
				h_up()
				h_h()
}
m.onclick = function (){
				m_up()
				m_h()
}
n.onclick = function (){
				n_up()
				n_h()
}
p.onclick = function (){
				p_up()
				p_h()
}
r.onclick = function (){
				r_up()
				r_h()
}
s.onclick = function (){
				s_up()
				s_h()
}
t.onclick = function (){
			 t_up()
				t_h()
}
u.onclick = function (){
				u_up()
				u_h()
}

console.log(u_top)





function scrollFunction() {
  if (player_2.scrollTop > 50 || player_2.scrollTop > 50) {
    to_p.style.display = "flex";
				to_p.classList.add("active")
				u.style.marginBottom = "56.25px"
				del()
  } else {
    to_p.style.display = "none";
				to_p.classList.remove("active")
				u.style.marginBottom = "0"
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  player_2.scrollTop = 0
				a_h()
}

function topFunction2() {
  playe_r.scrollTop = 0
}


to_p.onclick = function (){
				topFunction()
}
