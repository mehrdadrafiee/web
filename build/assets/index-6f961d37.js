import{$ as je,a0 as be,a1 as ye,a2 as xe,a3 as qe,F as _,a4 as c,R as e,y as s,P as m,a5 as ee,B as H,a6 as ae,a7 as Ue,a8 as me,H as ve,z as y,a9 as Ke,aa as Ye,ab as O,T as P,ac as I,r as te,ad as Je,ae as Qe,af as Xe,ag as Ze,ah as ea,ai as re,aj as aa,ak as Ee,al as ta,am as ra,an as sa,ao as na,ap as ia,V as oa,aq as la,ar as ca,as as da,at as ha,A as Se,au as Ce,S as C,av as _a,aw as pa,C as Te,N as J,ax as K,ay as ma,X as ua}from"./index-d2daa1f9.js";var ga=je({chartName:"AreaChart",GraphicalChild:be,axisComponents:[{axisType:"xAxis",AxisComp:ye},{axisType:"yAxis",AxisComp:xe}],formatAxisMap:qe}),V="NOT_FOUND";function ka(a){var t;return{get:function(n){return t&&a(t.key,n)?t.value:V},put:function(n,i){t={key:n,value:i}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}function fa(a,t){var r=[];function n(d){var l=r.findIndex(function(g){return t(d,g.key)});if(l>-1){var u=r[l];return l>0&&(r.splice(l,1),r.unshift(u)),u.value}return V}function i(d,l){n(d)===V&&(r.unshift({key:d,value:l}),r.length>a&&r.pop())}function o(){return r}function h(){r=[]}return{get:n,put:i,getEntries:o,clear:h}}var wa=function(t,r){return t===r};function ba(a){return function(r,n){if(r===null||n===null||r.length!==n.length)return!1;for(var i=r.length,o=0;o<i;o++)if(!a(r[o],n[o]))return!1;return!0}}function ya(a,t){var r=typeof t=="object"?t:{equalityCheck:t},n=r.equalityCheck,i=n===void 0?wa:n,o=r.maxSize,h=o===void 0?1:o,d=r.resultEqualityCheck,l=ba(i),u=h===1?ka(l):fa(h,l);function g(){var k=u.get(arguments);if(k===V){if(k=a.apply(null,arguments),d){var x=u.getEntries(),E=x.find(function(T){return d(T.value,k)});E&&(k=E.value)}u.put(arguments,k)}return k}return g.clearCache=function(){return u.clear()},g}function xa(a){var t=Array.isArray(a[0])?a[0]:a;if(!t.every(function(n){return typeof n=="function"})){var r=t.map(function(n){return typeof n=="function"?"function "+(n.name||"unnamed")+"()":typeof n}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+r+"]")}return t}function va(a){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var i=function(){for(var h=arguments.length,d=new Array(h),l=0;l<h;l++)d[l]=arguments[l];var u=0,g,k={memoizeOptions:void 0},x=d.pop();if(typeof x=="object"&&(k=x,x=d.pop()),typeof x!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof x+"]");var E=k,T=E.memoizeOptions,R=T===void 0?r:T,W=Array.isArray(R)?R:[R],D=xa(d),B=a.apply(void 0,[function(){return u++,x.apply(null,arguments)}].concat(W)),p=a(function(){for(var F=[],L=D.length,A=0;A<L;A++)F.push(D[A].apply(null,arguments));return g=B.apply(null,F),g});return Object.assign(p,{resultFunc:x,memoizedResultFunc:B,dependencies:D,lastResult:function(){return g},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),p};return i}var Ea=va(ya);const Sa=(a,t)=>a.find(r=>String(r.id)===String(t)),Ae=Ea(a=>a.app.proPlayers.data,a=>a.reduce((t,r)=>({...t,[r.account_id]:{...r}}),{})),Ca=_.div`
  background-color: ${c.colorDanger};
  padding: 15px;
  color: white;
`,se=a=>e.createElement(Ca,null,"Whoops! Something went wrong. ",a.text?a.text:"");se.propTypes={text:s.string};const Ta=_.div`
  flex: 1 1 0;
  padding: 0 16px;
  display: flex;
  align-items: center;

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
  }

  @media screen and (max-width: ${c.wrapTablet}) {
    padding: 4px 0;
  }

  @media screen and (max-width: ${c.wrapMobile}) {
    display: block;
    padding: 0;
    text-align: center;
  }
`,Aa=_.div`
  border-radius: 50%;
  flex-shrink: 0;
  height: 8px;
  margin-right: 8px;
  width: 8px;

  @media screen and (max-width: ${c.wrapMobile}) {
    display: inline-block;
    vertical-align: middle;
  }
`,Pa=_.div`
  color: ${a=>a.isPrimary?c.colorAttributes[a.attribute]:c.primaryTextColor};
  flex-shrink: 0;
  font-size: 12px;
  font-weight: 600;
  line-height: 1;

  @media screen and (max-width: ${c.wrapMobile}) {
    display: inline-block;
    vertical-align: middle;
  }
`,z=({style:a,attribute:t,isPrimary:r,base:n,gain:i})=>{const o={background:c.primaryTextColor},h={color:c.primaryTextColor};switch(t){default:o.background=c.colorAttributeStr,r&&(h.color=c.colorAttributeStr);break;case"agi":o.background=c.colorAttributeAgi,r&&(h.color=c.colorAttributeAgi);break;case"int":o.background=c.colorAttributeInt,r&&(h.color=c.colorAttributeInt);break}return e.createElement(Ta,{style:a},e.createElement(Aa,{attribute:t,style:o}),e.createElement(Pa,{attribute:t,style:h},n," + ",i))};z.propTypes={style:s.shape({}),attribute:s.string,isPrimary:s.bool,base:s.number,gain:s.number};const Ra=_.div`
  background: rgba(0, 0, 0, .45);
  border-radius: 8px;
  display: block;
  margin: auto;
  max-width: 300px;
  padding: 12px;
`,Ma=_.div`
  display: flex;

  @media screen and (max-width: ${c.wrapTablet}) {
    display: block;
  }
`,Pe=({hero:a})=>e.createElement(Ra,null,e.createElement(Ma,null,e.createElement(z,{attribute:"str",isPrimary:a.primary_attr==="str",base:a.base_str,gain:a.str_gain}),e.createElement(z,{attribute:"agi",isPrimary:a.primary_attr==="agi",base:a.base_agi,gain:a.agi_gain}),e.createElement(z,{attribute:"int",isPrimary:a.primary_attr==="int",base:a.base_int,gain:a.int_gain})));Pe.propTypes={hero:s.shape({primary_attr:s.string,base_str:s.number,base_agi:s.number,base_int:s.number,str_gain:s.number,agi_gain:s.number,int_gain:s.number})};const Ia=_.div`
  background: linear-gradient(to bottom, ${c.colorBlueMuted}, ${c.primarySurfaceColor});
  border-radius: 4px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, .3);
  position: relative;

  .__react_component_tooltip {
  opacity: 1 !important;
  padding: 0px !important;
}
`,Da=_.img`
  border-radius: 4px;
  display: block;
  height: auto;
  opacity: .7;
  overflow: hidden;
  transition: opacity .2s, box-shadow .4s, transform .2s;
  width: 100%;

  &:hover {
    opacity: 1;
    box-shadow: 0 0 150px rgba(255, 255, 255, .4);
    transform: scale(1.1);
  }
`,Ba=_.div`
  background: ${c.colorBlackMuted};
  color: ${c.colorMana};
  border-radius: 2px 0 0 0;
  font-weight: 600;
  bottom: 0;
  font-size: 10px;
  line-height: 1;
  padding: 1px 4px;
  position: absolute;
  right: 0;
`,Re=a=>{const t=ee(),r=a.mc&&parseInt(a.mc,0)>0;let n=!1;return r&&(n=typeof a.mc=="object"?a.mc[0]:a.mc),e.createElement(Ia,{"data-tip":!0,"data-for":t},e.createElement(Da,{src:H.VITE_IMAGE_CDN+a.img}),r&&e.createElement(Ba,null,n),e.createElement(ae,{id:t,effect:"solid",place:"bottom"},e.createElement(Ue,{ability:a})))};Re.propTypes={mc:m.oneOfType([m.object,m.array,m.string]),img:m.string.isRequired};const Fa=_.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: linear-gradient(to right,rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.05));
  border-radius: 2px;
  min-height: 40px;

  &:not(:last-child) {
    margin-bottom: 14px;
  }
`,$a=_.div`
  align-items: center;
  border-radius: 50%;
  color: ${c.colorGolden};
  text-shadow: 0 0 5px ${c.colorGolden};
  background-color: #080D15;
  box-shadow: 0 0 10px #b79a00;
  display: flex;
  flex: 0 0 24px;
  font-size: 16px;
  height: 24px;
  justify-content: center;
  position: relative;
  width: 24px;
  z-index: 2;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 5px;
`,ue=_.div`
  flex: 1 1 100%;
  font-size: 12px;
  text-align: center;
  align-items: center;

  &:first-child {
    padding-right: 12px;
  }

  &:last-child {
    padding-left: 12px;
  }
`,$=({talents:a,level:t})=>e.createElement(Fa,null,e.createElement(ue,null,a&&a[0]&&a[0].name),e.createElement($a,null,t),e.createElement(ue,null,a&&a[1]&&a[1].name));$.propTypes={level:m.string.isRequired,talents:m.oneOfType([m.object,m.array]).isRequired};const Ha=_.div`
  .__react_component_tooltip {
  opacity: 1 !important;
  padding: 0px !important;
  }
`,Wa=_.div`
  position: relative;
  width: 400px;
  background: linear-gradient(135deg, #131519, #1f2228);
  padding: 9px;
  overflow: hidden;
  border: 2px solid #27292b;
`,La=_.div`
  position: absolute;
  right: 0px;
  bottom: 0px;
  height: 100%;
  width: 100%;
  background-image: url('/assets/images/dota2/talent_tree.svg');
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.08;
`,Me=({talents:a,ttId:t})=>e.createElement(Ha,null,e.createElement(ae,{id:t,effect:"solid",place:"left"},e.createElement(Wa,null,e.createElement(La,null),e.createElement($,{talents:a[3],level:"25"}),e.createElement($,{talents:a[2],level:"20"}),e.createElement($,{talents:a[1],level:"15"}),e.createElement($,{talents:a[0],level:"10"}))));Me.propTypes={talents:m.oneOfType([m.object,m.array]).isRequired,ttId:m.string.isRequired};const Na=_.div`
  background: linear-gradient(to bottom, ${c.colorBlueMuted}, ${c.primarySurfaceColor});
  border-radius: 4px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, .3);
  position: relative;
`,Ga=_.img`
  border-radius: 4px;
  display: block;
  height: auto;
  opacity: .7;
  overflow: hidden;
  transition: opacity .2s, box-shadow .4s, transform .2s;
  width: 100%;

  &:hover {
    opacity: 1;
    box-shadow: 0 0 150px rgba(255, 255, 255, .4);
    transform: scale(1.1);
  }
`,Ie=({talents:a})=>{const t=ee();return e.createElement(Na,{"data-tip":!0,"data-for":t},e.createElement(Ga,{src:"/assets/images/dota2/talent_tree.svg",alt:"Talents"}),e.createElement(Me,{talents:a,ttId:t}))};Ie.propTypes={talents:m.oneOfType([m.object,m.array]).isRequired};const Oa=[{hero_name:"npc_dota_hero_antimage",hero_id:1,has_scepter:!0,scepter_desc:"Blinks an illusion to the target enemy or location, which attacks for a brief time. Counterspell is replicated on the Blink Fragment illusion.",scepter_skill_name:"Blink Fragment",scepter_new_skill:!0,has_shard:!0,shard_desc:"Counterspell Ally may be activated to create an anti-magic shell around an allied hero that blocks any targeted spells. Any time a spell is blocked by Counterspell or Counterspell Ally, an illusion of Anti-Mage will be created next to the enemy.",shard_skill_name:"Counterspell Ally",shard_new_skill:!0},{hero_name:"npc_dota_hero_axe",hero_id:2,has_scepter:!0,scepter_desc:"Counter Helix now applies a stacking debuff to enemies hit by it that causes them to deal less total attack damage to Axe. Counter Helix no longer has a cooldown and its counter advances when Axe attacks.",scepter_skill_name:"Counter Helix",scepter_new_skill:!1,has_shard:!0,shard_desc:"Multiple instances of Battle Hunger can stack on a single target.",shard_skill_name:"Battle Hunger",shard_new_skill:!1},{hero_name:"npc_dota_hero_bane",hero_id:3,has_scepter:!0,scepter_desc:"Reduces Fiend's Grip cooldown by 45. Fiend's Grip now creates two uncontrollable illusions that are also channeling Fiend's Grip on the target. Illusions take 200% incoming damage and immediately die if they are interrupted. Damage does not stack.",scepter_skill_name:"Fiend's Grip",scepter_new_skill:!1,has_shard:!0,shard_desc:"Reduces cooldown by 3. Causes Brain Sap to become a 550 AoE spell. Secondary targets only heal for 30%.",shard_skill_name:"Brain Sap",shard_new_skill:!1},{hero_name:"npc_dota_hero_bloodseeker",hero_id:4,has_scepter:!0,scepter_desc:`Bloodseeker sprays his blood continuously in the area around him, losing health to damage and slow his enemies. While active, Sanguivore's healing is increased. Cannot be turned off while on cooldown. 

Additionally, passively turns all your overheal from your own abilities into an all damage barrier up to 50% of Bloodseeker's Max Health. Barrier amount decays by 0.5% per second.`,scepter_skill_name:"Blood Mist",scepter_new_skill:!0,has_shard:!0,shard_desc:"Bloodrage attacks now deal 35 pure damage and heals Bloodseeker for that amount. Only works for Bloodseeker.",shard_skill_name:"Bloodrage",shard_new_skill:!1},{hero_name:"npc_dota_hero_crystal_maiden",hero_id:5,has_scepter:!0,scepter_desc:"Allows you to move, cast and attack during Freezing Field. Can still be interrupted by enemies. You move 75% slower during this. Increases total number of explosions by 20%. Applies Frostbite to any unit that has been standing in the Freezing Field for over 2.5s.",scepter_skill_name:"Freezing Field",scepter_new_skill:!1,has_shard:!0,shard_desc:"Slides in a direction, creating a crystal clone of herself in her place and disjointing incoming projectiles. If the clone takes enough damage or times out, it shatters, Frostbiting enemies in a 450 AoE around its place. The Clone can also be destroyed by Crystal Maiden's own spells.",shard_skill_name:"Crystal Clone",shard_new_skill:!0},{hero_name:"npc_dota_hero_drow_ranger",hero_id:6,has_scepter:!0,scepter_desc:"Frost Arrows now apply a Hypothermia stack to enemies, increasing damage from Frost Arrows and reducing their regeneration per stack. If an enemy dies with Hypothermia stacks, they burst and deal damage per stack and slow in an area around it.",scepter_skill_name:"Frost Arrows",scepter_new_skill:!1,has_shard:!0,shard_desc:"Drow Ranger creates a hill of ice beneath her. While standing on the hill, attackers gain bonus attack range and high ground advantage - they cannot miss and gain flying vision. Drow Ranger additionally gets bonus Multishot arrows per wave while on the hill. The front of the hill obscures vision and cannot be moved through except by Drow Ranger. Does not interrupt Multishot when cast",shard_skill_name:"Glacier",shard_new_skill:!0},{hero_name:"npc_dota_hero_earthshaker",hero_id:7,has_scepter:!0,scepter_desc:"Enchant Totem becomes a ground target ability, causing Earthshaker to jump in the air and land at the target spot, casting Enchant Totem there.  Self-casting the ability will behave in the original form, without jumping. Grants Enchant Totem a cleaving attack.",scepter_skill_name:"Enchant Totem",scepter_new_skill:!1,has_shard:!0,shard_desc:"Reduces Fissure cooldown and allows Earthshaker to walk on it. When he casts any ability, an Aftershock is released along its path that stuns for a shortened duration.",shard_skill_name:"Fissure",shard_new_skill:!1},{hero_name:"npc_dota_hero_juggernaut",hero_id:8,has_scepter:!0,scepter_desc:"Performs a short Omnislash for 1 seconds.",scepter_skill_name:"Swiftslash",scepter_new_skill:!0,has_shard:!0,shard_desc:"Increases Blade Fury radius, and slows enemies by 35%.",shard_skill_name:"Blade Fury",shard_new_skill:!1},{hero_name:"npc_dota_hero_mirana",hero_id:9,has_scepter:!0,scepter_desc:"Causes Sacred Arrow to release a Starstorm on enemies along the travel path of the primary arrow, releasing a second Starstorm that deals less damage to the impacted unit.",scepter_skill_name:"Sacred Arrow",scepter_new_skill:!1,has_shard:!0,shard_desc:`Upon landing, launches a projectile along Sagan's leap path, dealing damage and slowing units affected and guarantees them to be hit with a secondary Starstorm if that spell is cast. Leap does not break Moonlight Shadow invisibility.

 Can be put on alt-cast to choose the distance and facing direction of the jump. 

Grants 1 bonus charge(s).`,shard_skill_name:"Leap",shard_new_skill:!1},{hero_name:"npc_dota_hero_morphling",hero_id:10,has_scepter:!0,scepter_desc:"Adds an alt-cast to Morph. When enabled, a strong illusion is created of the target hero that can cast all of the hero's basic abilities. If the illusion is alive when Morphling toggles the ability, he will take the place of the illusion, destroying it.",scepter_skill_name:"Morph",scepter_new_skill:!1,has_shard:!0,shard_desc:"Morphling can shift attributes while stunned. Reduces mana cost.",shard_skill_name:"Attribute Shift (Strength Gain)",shard_new_skill:!1},{hero_name:"npc_dota_hero_nevermore",hero_id:11,has_scepter:!0,scepter_desc:"Increases max souls.",scepter_skill_name:"Necromastery",scepter_new_skill:!1,has_shard:!0,shard_desc:"Cooldown reduced by 2s per enemy hero.",shard_skill_name:"Shadowraze",shard_new_skill:!1},{hero_name:"npc_dota_hero_phantom_lancer",hero_id:12,has_scepter:!0,scepter_desc:"Spirit Lance bounces twice on enemies, prioritizing Heroes. Increases Spirit Lance illusion damage.",scepter_skill_name:"Spirit Lance",scepter_new_skill:!1,has_shard:!0,shard_desc:"Adds an active ability to Juxtapose. Renders Phantom Lancer invisible for up to 8 seconds while generating a duplicate image to confuse enemies. His movement speed is increased by 15% during this invisibility.",shard_skill_name:"Juxtapose",shard_new_skill:!1},{hero_name:"npc_dota_hero_puck",hero_id:13,has_scepter:!0,scepter_desc:"All enemies affected by Dream Coil are attacked at a rate equal to 90% of Puck's attack rate. The attacks continue while the target is stunned if they break the Dream Coil.",scepter_skill_name:"Dream Coil",scepter_new_skill:!1,has_shard:!0,shard_desc:"Puck's attacks deal bonus magic damage. Puck attacks all enemies within its attack range every time it phase shifts.",shard_skill_name:"Phase Shift",shard_new_skill:!1},{hero_name:"npc_dota_hero_pudge",hero_id:14,has_scepter:!0,scepter_desc:"Increases Rot radius and damage, and causes it to reduce enemy health regen.",scepter_skill_name:"Rot",scepter_new_skill:!1,has_shard:!0,shard_desc:"Decreases cooldown, and allows targeting an ally with bonus cast range to swallow them and heal them for a percentage of their max health per second.",shard_skill_name:"Dismember",shard_new_skill:!1},{hero_name:"npc_dota_hero_razor",hero_id:15,has_scepter:!0,scepter_desc:"Causes Eye of the Storm to strike two different units instead of one and can damage structures. When striking buildings, it will only target towers, barracks, and the Ancient.",scepter_skill_name:"Eye of the Storm",scepter_new_skill:!1,has_shard:!0,shard_desc:"Increases Cast Range. Allows Static Link to be put on alt-cast to pull Razor and his Target towards at each other at a speed of 75.",shard_skill_name:"Static Link",shard_new_skill:!1},{hero_name:"npc_dota_hero_sand_king",hero_id:16,has_scepter:!0,scepter_desc:"Every 0.2s, 2 Burrowstrike spines are created at random locations, each measuring 10% of the Sand Storm's current radius, that apply Burrowstrike damage and stun to enemies hit.",scepter_skill_name:"Sand Storm",scepter_new_skill:!1,has_shard:!0,shard_desc:"Increases Epicenter Pulse damage, and every 3.5s causes a small single Epicenter Pulse around Sand King.",shard_skill_name:"Epicenter",shard_new_skill:!1},{hero_name:"npc_dota_hero_storm_spirit",hero_id:17,has_scepter:!0,scepter_desc:"Electric Vortex affects all enemies within a radius around Storm Spirit.",scepter_skill_name:"Electric Vortex",scepter_new_skill:!1,has_shard:!0,shard_desc:"Can be activated to grant Storm Spirit and nearby allied heroes 3 Overload charges. Provides bonus Attack Speed. Lasts up to 12 seconds or until the charges are depleted.",shard_skill_name:"Overload",shard_new_skill:!1},{hero_name:"npc_dota_hero_sven",hero_id:18,has_scepter:!0,scepter_desc:"Increases cast range and applies a basic dispel on the target. Can be cast on invulnerable targets. If alt-cast, it deals an additional 180 damage and Sven travels with the Storm Hammer.",scepter_skill_name:"Storm Hammer",scepter_new_skill:!1,has_shard:!0,shard_desc:"Warcry is now undispellable and passively grants 6 armor and 3% movement speed to all allies near Sven.",shard_skill_name:"Warcry",shard_new_skill:!1},{hero_name:"npc_dota_hero_tiny",hero_id:19,has_scepter:!0,scepter_desc:"CHANNELED - Tiny channels to throw random trees within range towards the targeted area. Deals Tiny's attack damage to enemies in that area with each tree thrown.",scepter_skill_name:"Tree Volley",scepter_new_skill:!0,has_shard:!0,shard_desc:"Increases damage dealt by thrown trees by %bonus_bonus_damage%.",shard_skill_name:"Tree Throw",shard_new_skill:!1},{hero_name:"npc_dota_hero_vengefulspirit",hero_id:20,has_scepter:!0,scepter_desc:"Upon death, creates a strong illusion of Vengeful Spirit that deals and takes full damage and can cast all of her spells. If the illusion is alive when Vengeful Spirit respawn, she will take its place. XP earned by her illusion is given to her. Strong Illusions are not instantly killed by spells.",scepter_skill_name:"Vengeance Aura",scepter_new_skill:!1,has_shard:!0,shard_desc:"Bounces once on an enemy, prioritizing heroes, within 75% of Magic Missile's current cast range from the first target.",shard_skill_name:"Magic Missile",shard_new_skill:!1},{hero_name:"npc_dota_hero_windrunner",hero_id:21,has_scepter:!0,scepter_desc:"Windrun reduces physical damage taken by 45%, and grants invisibility that is not broken by attacking or casting spells.",scepter_skill_name:"Windrun",scepter_new_skill:!1,has_shard:!0,shard_desc:"Vector Targeted. Summons a strong wind that pushes all enemies in the target area towards the target direction.",shard_skill_name:"Gale Force",shard_new_skill:!0},{hero_name:"npc_dota_hero_zuus",hero_id:22,has_scepter:!0,scepter_desc:"Creates a storm cloud anywhere on the map that automatically casts Lightning Bolt on nearby enemies.",scepter_skill_name:"Nimbus",scepter_new_skill:!0,has_shard:!0,shard_desc:"Zeus gains bonus attack speed and his attacks create Arc Lightnings that deal a percentage of its damage. Can be toggled off to stop this effect.",shard_skill_name:"Lightning Hands",shard_new_skill:!0},{hero_name:"npc_dota_hero_kunkka",hero_id:23,has_scepter:!0,scepter_desc:"Releases a visible Torrent in a random area within 1100 range of the target position once every 0.25 for 4.0 seconds.",scepter_skill_name:"Torrent Storm",scepter_new_skill:!0,has_shard:!0,shard_desc:"Releases a Tidal Wave that spawns behind Kunkka. Deals damage and drags enemies along it for the duration. Enemies cannot attack while being dragged.",shard_skill_name:"Tidal Wave",shard_new_skill:!0},{hero_name:"npc_dota_hero_lina",hero_id:25,has_scepter:!0,scepter_desc:"Grants Lina unobstructed movement and increases her spell damage and magic resistance. Grants max fiery soul stacks on activation.",scepter_skill_name:"Flame Cloak",scepter_new_skill:!0,has_shard:!0,shard_desc:"Lina's abilities deal 20 more damage for each Fiery Soul Charge.",shard_skill_name:"Fiery Soul",shard_new_skill:!1},{hero_name:"npc_dota_hero_lion",hero_id:26,has_scepter:!0,scepter_desc:"Increases damage. Decreases cooldown. Finger of Death hits all units in a small area.",scepter_skill_name:"Finger of Death",scepter_new_skill:!1,has_shard:!0,shard_desc:"Causes Mana Drain to affect up to 2 additional enemies and increases break distance. Lion becomes Debuff Immune with 60% magic resistance while channeling.",shard_skill_name:"Mana Drain",shard_new_skill:!1},{hero_name:"npc_dota_hero_shadow_shaman",hero_id:27,has_scepter:!0,scepter_desc:"Causes Serpent Wards to have split shot, attacking two units for full damage.",scepter_skill_name:"Mass Serpent Ward",scepter_new_skill:!1,has_shard:!0,shard_desc:"Shackles creates 4 Serpent Wards attacking the target. Increases Shackles cast range by 75. Serpent wards lasts 6 seconds.",shard_skill_name:"Shackles",shard_new_skill:!1},{hero_name:"npc_dota_hero_slardar",hero_id:28,has_scepter:!0,scepter_desc:"Provides additional HP Regen, Armor and Status Resistance while in a puddle or in the river.",scepter_skill_name:"Seaborn Sentinel",scepter_new_skill:!1,has_shard:!0,shard_desc:"Slithereen Crush now applies Corrosive Haze for a short time to units affected.",shard_skill_name:"Slithereen Crush",shard_new_skill:!1},{hero_name:"npc_dota_hero_tidehunter",hero_id:29,has_scepter:!0,scepter_desc:"Gush becomes a ground targeted wave ability that affects enemy units in a line.  Decreases cooldown.",scepter_skill_name:"Gush",scepter_new_skill:!1,has_shard:!0,shard_desc:"Tidehunter attaches a heavy anchor to an enemy hero. The hero is leashed while attached to the anchor. Attempting to move more than 350 units away from the anchor forces the hero to 100 move speed, dragging the anchor behind them. The anchor can be destroyed with 4 hero attacks.",shard_skill_name:"Dead in the Water",shard_new_skill:!0},{hero_name:"npc_dota_hero_witch_doctor",hero_id:30,has_scepter:!0,scepter_desc:"Death Ward attacks have True Strike and bounce between nearby enemies.",scepter_skill_name:"Death Ward",scepter_new_skill:!1,has_shard:!0,shard_desc:"Turns Witch Doctor into a Death Ward briefly with reduced attack speed. He is hidden during this time.",shard_skill_name:"Voodoo Switcheroo",shard_new_skill:!0},{hero_name:"npc_dota_hero_lich",hero_id:31,has_scepter:!0,scepter_desc:"Sinister Gaze becomes an Area of Effect ability, affecting units within a radius of 400 in the target area.",scepter_skill_name:"Sinister Gaze",scepter_new_skill:!1,has_shard:!0,shard_desc:`Creates an Ice Spire at the target spot, slowing enemies around it. Can take 5 hero hits or 10 creep hits and when destroyed it will create a Frost Blast around it.

Chain Frost can be cast on the Spire and can bounce to the Spire if there are no other enemies in range.

Lich can cast Frost Shield on the Spire. Each Frost Shield tick will heal the spire by 1 hero attack.`,shard_skill_name:"Ice Spire",shard_new_skill:!0},{hero_name:"npc_dota_hero_riki",hero_id:32,has_scepter:!0,scepter_desc:"Increases cast range, number of attacks and allows you to target an allied hero, hiding inside them for the duration.  Each attack hits an additional target.",scepter_skill_name:"Tricks of the Trade",scepter_new_skill:!1,has_shard:!0,shard_desc:"Enemies caught in the smoke screen have their armor reduced by 5 and cannot be targeted by their allies.",shard_skill_name:"Smoke Screen",shard_new_skill:!1},{hero_name:"npc_dota_hero_enigma",hero_id:33,has_scepter:!0,scepter_desc:"Black Hole deals additional damage equivalent to 4% of the unit's Max Health per second and does a non-interrupting pull towards it in a 1200 AoE. Pulls at a rate of 175.",scepter_skill_name:"Black Hole",scepter_new_skill:!1,has_shard:!0,shard_desc:"Increases Malefice stun duration by 0.35s and creates an Eidolon next to the target every instance of Malefice stun. These Eidolons will not multiply further.",shard_skill_name:"Malefice",shard_new_skill:!1},{hero_name:"npc_dota_hero_tinker",hero_id:34,has_scepter:!0,scepter_desc:"Upgrades Tinker's Laser into a Shrink Ray, reducing the main target's size, current health, and maximum health by 10% (stacking). The laser bounces once on the farthest target up to 700 range from the primary one, prioritizing heroes.",scepter_skill_name:"Laser",scepter_new_skill:!1,has_shard:!0,shard_desc:"Throws a flare towards an enemy, dealing damage, teleporting them away, rooting them and reducing their Cast and Attack Range for 2 seconds.",shard_skill_name:"Warp Flare",shard_new_skill:!0},{hero_name:"npc_dota_hero_sniper",hero_id:35,has_scepter:!0,scepter_desc:"Causes Assassinate to fire quicker and stun the enemy target.",scepter_skill_name:"Assassinate",scepter_new_skill:!1,has_shard:!0,shard_desc:"Launches a grenade at the target area, dealing damage to enemies and knocking them and Sniper himself back. Enemies affected are disarmed and have their movement slowed after the knockback.",shard_skill_name:"Concussive Grenade",shard_new_skill:!0},{hero_name:"npc_dota_hero_necrolyte",hero_id:36,has_scepter:!0,scepter_desc:"Heartstopper Aura's Health Decay is increased by 50% of Necrophos's current health regeneration.",scepter_skill_name:"Heartstopper Aura",scepter_new_skill:!1,has_shard:!0,shard_desc:"Necrophos turns into a large Death Pulse towards the target unit's position. Once it arrives to the location, the Death Pulse spreads towards nearby enemies and allies.",shard_skill_name:"Death Seeker",shard_new_skill:!0},{hero_name:"npc_dota_hero_warlock",hero_id:37,has_scepter:!0,scepter_desc:"Calls 2 Golems.",scepter_skill_name:"Chaotic Offering",scepter_new_skill:!1,has_shard:!0,shard_desc:"Increases the power of all imps summoned by Warlock.",shard_skill_name:"Eldritch Summoning",shard_new_skill:!1},{hero_name:"npc_dota_hero_beastmaster",hero_id:38,has_scepter:!0,scepter_desc:`Attacks from Beastmaster or a nearby unit he controls will cause him bang his drum, dealing damage to nearby units and  healing Beastmaster and units under his control for a portion of the damage dealt. Every attack decreases the interval between drum hits down to a minimum of 0.4s between hits after 20 attacks. If no attacks are made, the intervals gradually increase.

Using Primal Roar counts as 10/15/20 attacks, based on the current level of Primal Roar.`,scepter_skill_name:"Drums of Slom",scepter_new_skill:!0,has_shard:!0,shard_desc:"Reduces Hawk cooldown by 10s and summons an additional Hawk.",shard_skill_name:"Call of the Wild Hawk",shard_new_skill:!1},{hero_name:"npc_dota_hero_queenofpain",hero_id:39,has_scepter:!0,scepter_desc:"Causes Shadow Strike to become a 375 AoE Spell, and have increased initial damage. When Shadow Strike ends or is re-applied to an enemy Hero, the target emits a Scream of Pain, hitting any nearby enemies.",scepter_skill_name:"Shadow Strike",scepter_new_skill:!1,has_shard:!0,shard_desc:"Releases a sonic boom when Queen of Pain blinks, at both her starting and ending locations. Deals 125 damage in a 300 AoE and silences the target for 1.75 seconds.",shard_skill_name:"Blink",shard_new_skill:!1},{hero_name:"npc_dota_hero_venomancer",hero_id:40,has_scepter:!0,scepter_desc:"Venomancer's attacks have increased base damage per debuff from Venomancer on the target. Does not apply to attacks from Plague Wards.",scepter_skill_name:"Poison Sting",scepter_new_skill:!1,has_shard:!0,shard_desc:"If Venomous Gale is dispelled in any way, the target will receive 300 damage and be stunned for 1.6 seconds.",shard_skill_name:"Venomous Gale",shard_new_skill:!1},{hero_name:"npc_dota_hero_faceless_void",hero_id:41,has_scepter:!0,scepter_desc:"Applies a Time Lock to all units at the landing destination.",scepter_skill_name:"Time Walk",scepter_new_skill:!1,has_shard:!0,shard_desc:"Available for 1.5 seconds after landing Time Walk. If used in this period, you will reverse your time walk back to your previous cast location. Does not affect health or proc scepter hits.",shard_skill_name:"Reverse Time Walk",shard_new_skill:!0},{hero_name:"npc_dota_hero_skeleton_king",hero_id:42,has_scepter:!0,scepter_desc:"Reduces cooldown.",scepter_skill_name:"Reincarnation",scepter_new_skill:!1,has_shard:!0,shard_desc:"Causes Reincarnation to have no mana cost.",shard_skill_name:"Reincarnation",shard_new_skill:!1},{hero_name:"npc_dota_hero_death_prophet",hero_id:43,has_scepter:!0,scepter_desc:"Whenever an enemy is affected by Death Prophet's spells or when she attacks an enemy, a ghost will fly out, slow and hit the enemy for an increased bonus of its usual damage then return to her with life.",scepter_skill_name:"Exorcism",scepter_new_skill:!1,has_shard:!0,shard_desc:"Increases Spirit Siphon charges by 1 and causes enemies to be feared for 1.0 seconds if they are siphoned for 3 seconds consecutively.",shard_skill_name:"Spirit Siphon",shard_new_skill:!1},{hero_name:"npc_dota_hero_phantom_assassin",hero_id:44,has_scepter:!0,scepter_desc:"Causes Blur to have instant cast time and applies a dispel. Any time Phantom Assassin gets a hero kill, her abilities are refreshed. Reduces cooldown.",scepter_skill_name:"Blur",scepter_new_skill:!1,has_shard:!0,shard_desc:"Phantom Assassin releases sharp blades around her, dealing a percentage of each victim's max health on impact and applying Break.",shard_skill_name:"Fan of Knives",shard_new_skill:!0},{hero_name:"npc_dota_hero_pugna",hero_id:45,has_scepter:!0,scepter_desc:"Reduces cooldown by 3.5s. When targeting an enemy hero, Pugna reduces their outgoing spell damage by 8% per second up to a maximum of 75% and increases his own, up to a maximum of 100%. When draining through a Nether Ward using Shard, the rate of increase/decrease is 4% instead. Debuff lasts 8 seconds.",scepter_skill_name:"Life Drain",scepter_new_skill:!1,has_shard:!0,shard_desc:"Life Drain can target your Nether Ward, causing life drain to refract to all enemy heroes within 700 units of the ward for 75% of its normal value. The effect is interrupted if the ward is destroyed.",shard_skill_name:"Life Drain",shard_new_skill:!1},{hero_name:"npc_dota_hero_templar_assassin",hero_id:46,has_scepter:!0,scepter_desc:"CHANNELED - Allows Templar Assassin to teleport to any Psionic Trap after channeling for 2 seconds, detonating it upon arrival as if it was fully charged and instantly dealing 300 bonus damage. Channeling Psionic Projection does not break Meld.",scepter_skill_name:"Psionic Projection",scepter_new_skill:!0,has_shard:!0,shard_desc:"Increases max trap count and trap vision range.  When activated, traps now silence affected enemies.",shard_skill_name:"Psionic Trap",shard_new_skill:!1},{hero_name:"npc_dota_hero_viper",hero_id:47,has_scepter:!0,scepter_desc:"Viper slams into the ground, splattering each enemy in a 500 AoE for 4 seconds with the effect of Corrosive Skin.",scepter_skill_name:"Nosedive",scepter_new_skill:!0,has_shard:!0,shard_desc:"Increases max stacks, and causes Poison Attack to lower armor per stack and to affect buildings for reduced damage.",shard_skill_name:"Poison Attack",shard_new_skill:!1},{hero_name:"npc_dota_hero_luna",hero_id:48,has_scepter:!0,scepter_desc:"Allows Luna to cast Eclipse on an allied unit or herself and have its effects follow them, or cast it on an area. Increases total beams, reduces duration, removes the limit on beams per unit, and makes the beams appear twice as fast.",scepter_skill_name:"Eclipse",scepter_new_skill:!1,has_shard:!0,shard_desc:"Increases Rotating Moon Glaive count by 1 and collision damage by 20%.",shard_skill_name:"Moon Glaives",shard_new_skill:!1},{hero_name:"npc_dota_hero_dragon_knight",hero_id:49,has_scepter:!0,scepter_desc:"Increases the level of Dragon Form by adding a Level 4 Black Dragon, that increases damage, and effectiveness of the Wyrm's Wrath attacks.",scepter_skill_name:"Elder Dragon Form",scepter_new_skill:!1,has_shard:!0,shard_desc:"Ignites an area, dealing damage over time that lingers on enemies in it. Has reduced cast range when melee.",shard_skill_name:"Fireball",shard_new_skill:!0},{hero_name:"npc_dota_hero_dazzle",hero_id:50,has_scepter:!0,scepter_desc:"Shadow Wave can now target and bounce between enemies in addition to allies. When bouncing to an enemy, they will take damage and heal nearby allies equal to 150% of the normal healing and damage values. Dazzle will also perform an attack against any enemy that Shadow Wave bounces to.",scepter_skill_name:"Shadow Wave",scepter_new_skill:!1,has_shard:!0,shard_desc:"Causes Poison Touch to hex affected targets for 1.6 seconds.",shard_skill_name:"Poison Touch",shard_new_skill:!1},{hero_name:"npc_dota_hero_rattletrap",hero_id:51,has_scepter:!0,scepter_desc:"Supercharges Clockwerks abilities: Battery Assault affects all enemies in its range; Clockwerk's attack speed in Power Cogs is increased; Rocket Flares have a reduced cooldown and fire additional rockets to either side of the target; Hookshot stun radius and duration is increased; Jetpack moves faster. Clockwerk's movement and attack speed becomes slowed to a crawl after the duration runs out.",scepter_skill_name:"Overclocking",scepter_new_skill:!0,has_shard:!0,shard_desc:"Clockwerk activates a jetpack, gaining flying movement, flying vision, and bonus movement speed. Clockwerk has a severely-limited turn rate during this time and cannot attack. Jetpack is cancelled upon casting Hookshot.",shard_skill_name:"Jetpack",shard_new_skill:!0},{hero_name:"npc_dota_hero_leshrac",hero_id:52,has_scepter:!0,scepter_desc:"Causes Leshrac and all nearby enemies to turn ethereal, preventing them from attacking, slowing them, and making them take more magic damage. Increases Leshrac's speed rather than reducing it. Does not cause Leshrac to take amplified damage.",scepter_skill_name:"Nihilism",scepter_new_skill:!0,has_shard:!0,shard_desc:"Causes Split Earth to repeat in the same location 3 additional times, with a 5 second delay between each one. Each time the radius increases by 45. Split Earth echo location is visible to both teams.",shard_skill_name:"Split Earth",shard_new_skill:!1},{hero_name:"npc_dota_hero_furion",hero_id:53,has_scepter:!0,scepter_desc:"Lowers cooldown by 25s. Entangles all enemies it hits. Duration scales from 2s up to 3.8s seconds at max bounce.",scepter_skill_name:"Wrath of Nature",scepter_new_skill:!1,has_shard:!0,shard_desc:"Applies a curse on all enemy heroes within 1200 range, displaying them in fog, slowing them, and causing damage over time based on the number of trees within 250 radius. Treants count as trees for this purpose.",shard_skill_name:"Curse of the Oldgrowth",shard_new_skill:!0},{hero_name:"npc_dota_hero_life_stealer",hero_id:54,has_scepter:!0,scepter_desc:"Increases cast range and reduces cooldown to =20s.  Infest may target enemy heroes for a short duration, disarming them and attacking them from the inside while increasing Lifestealer's regeneration rate.",scepter_skill_name:"Infest",scepter_new_skill:!1,has_shard:!0,shard_desc:"Infest explosion applies a 50% duration Open Wounds to enemies in the damage radius.",shard_skill_name:"Infest",shard_new_skill:!1},{hero_name:"npc_dota_hero_dark_seer",hero_id:55,has_scepter:!0,scepter_desc:"Passive ability. Causes Dark Seer's next attack on a hero to have True Strike, knock a replica out of the victim, damaging and stunning them based on how far Dark Seer has moved in the past 3.0 seconds. Max power is reached after 1100 distance moved.",scepter_skill_name:"Normal Punch",scepter_new_skill:!0,has_shard:!0,shard_desc:"Surged units leave behind a 150 radius trail that lasts 7s, slows enemies around it by -50% and deals 40 damage per second in 0.5s intervals. Can be put on alt-cast to disable the trail.",shard_skill_name:"Surge",shard_new_skill:!1},{hero_name:"npc_dota_hero_clinkz",hero_id:56,has_scepter:!0,scepter_desc:"Summons a row of Burning Skeleton Archers in the target location.",scepter_skill_name:"Burning Army",scepter_new_skill:!0,has_shard:!0,shard_desc:"CHANNELED - Clinkz channels and shoots multiple piercing arrows in the target direction that hit all enemy units dealing a percentage of Clinkz' attack damage and applying attack modifiers.",shard_skill_name:"Burning Barrage",shard_new_skill:!0},{hero_name:"npc_dota_hero_omniknight",hero_id:57,has_scepter:!0,scepter_desc:"Grants one extra charge and global cast range. Always casts a Guardian Angel on self as well as the selected target",scepter_skill_name:"Guardian Angel",scepter_new_skill:!1,has_shard:!0,shard_desc:"Repel grants its target =60% Magic Resistance.",shard_skill_name:"Repel",shard_new_skill:!1},{hero_name:"npc_dota_hero_enchantress",hero_id:58,has_scepter:!0,scepter_desc:"Enchantress roots an enemy unit. All creeps, ally, enemy and neutral within a radius will gain bonus movement and attack speed and attack the chosen target for 6 seconds.",scepter_skill_name:"Little Friends",scepter_new_skill:!0,has_shard:!0,shard_desc:"Leaps backward, dodges incoming projectiles, and launches an Impetus attack on the 2 furthest enemy units within Enchantress' attack range + 100.",shard_skill_name:"Sproink",shard_new_skill:!0},{hero_name:"npc_dota_hero_huskar",hero_id:59,has_scepter:!0,scepter_desc:"Forces the enemy target to attack Huskar and increases cast range.",scepter_skill_name:"Life Break",scepter_new_skill:!1,has_shard:!0,shard_desc:"Lowers Inner Fire cooldown and causes it to apply a movement speed slow and heal Huskar for a percentage of the damage dealt to enemies.",shard_skill_name:"Inner Fire",shard_new_skill:!1},{hero_name:"npc_dota_hero_night_stalker",hero_id:60,has_scepter:!0,scepter_desc:"Reduces cooldown of Crippling Fear and it becomes a toggled ability that takes a percentage of max mana per second to maintain. The cost is lower during the night.",scepter_skill_name:"Crippling Fear",scepter_new_skill:!1,has_shard:!0,shard_desc:"Hunter in the Night may be cast on a creep, instantly killing it and restoring some of Night Stalker's maximum health and mana. Cannot target ancients during the daytime.",shard_skill_name:"Hunter in the Night",shard_new_skill:!1},{hero_name:"npc_dota_hero_broodmother",hero_id:61,has_scepter:!0,scepter_desc:"Broodmother may create up to 5 invisible web lines touching any existing web. Enemy Heroes that cross the web line will spring the trap, becoming rooted, revealed in fog, and take damage over time.  Multiple Heroes can trip on the same line until it's destroyed after being initially triggered.  Broodmother's team is alerted via the minimap when an enemy has triggered the snare.",scepter_skill_name:"Spinner's Snare",scepter_new_skill:!0,has_shard:!0,shard_desc:"Increases duration. While Hunger is active, the bonus damage is increased by 4% every 1s.",shard_skill_name:"Insatiable Hunger",shard_new_skill:!1},{hero_name:"npc_dota_hero_bounty_hunter",hero_id:62,has_scepter:!0,scepter_desc:"Increases cast range and applies Jinada on hit.",scepter_skill_name:"Shuriken Toss",scepter_new_skill:!1,has_shard:!0,shard_desc:"Applies Shadow Walk and all of it's bonuses to the target ally. Allied fade time is 1.0s. Does not break Bounty Hunter's invisibility when cast.",shard_skill_name:"Friendly Shadow",shard_new_skill:!0},{hero_name:"npc_dota_hero_weaver",hero_id:63,has_scepter:!0,scepter_desc:"Time Lapse may target allied Heroes with 500 cast range.",scepter_skill_name:"Time Lapse",scepter_new_skill:!1,has_shard:!0,shard_desc:"Shukuchi puts a mark on enemies it damages that last 4.6 seconds. 0.2s after Weaver exits Shukuchi, enemies with a mark within 1200 range will also be attacked with a secondary Geminate attack ",shard_skill_name:"Shukuchi",shard_new_skill:!1},{hero_name:"npc_dota_hero_jakiro",hero_id:64,has_scepter:!0,scepter_desc:"Increases Macropyre duration, width and causes it to deal Pure damage. Jakiro emits two walls of ice along the edges of the Macropyre that slow any enemies trying to cross them by 60%.",scepter_skill_name:"Macropyre",scepter_new_skill:!1,has_shard:!1,shard_desc:"",shard_skill_name:"",shard_new_skill:!1},{hero_name:"npc_dota_hero_batrider",hero_id:65,has_scepter:!0,scepter_desc:"Flaming Lasso grabs both its target, as well as the target's nearest allied hero within 650 units. The secondary target is tethered to the first.",scepter_skill_name:"Flaming Lasso",scepter_new_skill:!1,has_shard:!0,shard_desc:"Flaming Lasso no longer disarms you.",shard_skill_name:"Flaming Lasso",shard_new_skill:!1},{hero_name:"npc_dota_hero_chen",hero_id:66,has_scepter:!0,scepter_desc:"HP Regen Aura becomes global and affects all allied units.",scepter_skill_name:"Divine Favor",scepter_new_skill:!1,has_shard:!0,shard_desc:"Allows Holy Persuasion to target Ancient creeps. Can control up to 1/2/3 Ancient creeps based on Hand of God's level. Additionally levels up some abilities of creeps by 1 level.",shard_skill_name:"Holy Persuasion",shard_new_skill:!1},{hero_name:"npc_dota_hero_spectre",hero_id:67,has_scepter:!0,scepter_desc:"Creates a spectral nemesis to attack each enemy hero. Illusions spawned from this ability follow the same rules as Shadow Step illusions and can also be swapped to by using Reality.",scepter_skill_name:"Haunt",scepter_new_skill:!0,has_shard:!0,shard_desc:"Dispersion can be activated to increase the amount absorbed and reflected by Dispersion by 50% of its base values for 5s. Cooldown 25. Manacost 50.",shard_skill_name:"Dispersion",shard_new_skill:!1},{hero_name:"npc_dota_hero_ancient_apparition",hero_id:68,has_scepter:!0,scepter_desc:"Removes cooldown and reduces manacost by 50%.",scepter_skill_name:"Chilling Touch",scepter_new_skill:!1,has_shard:!0,shard_desc:"Freezes enemies hit with the current level of Cold Feet for 60% of the duration.",shard_skill_name:"Ice Blast",shard_new_skill:!1},{hero_name:"npc_dota_hero_doom_bringer",hero_id:69,has_scepter:!0,scepter_desc:"Allies in a 300 radius around the doomed target also suffer the effects of Doom. Allows Doom to be self-cast to affect enemies around himself with Doom.",scepter_skill_name:"Doom",scepter_new_skill:!1,has_shard:!0,shard_desc:"Heals Doom and his controlled units for 60% of the damage dealt.",shard_skill_name:"Scorched Earth",shard_new_skill:!1},{hero_name:"npc_dota_hero_ursa",hero_id:70,has_scepter:!0,scepter_desc:"Reduces cooldown and allows Ursa to use Enrage while disabled.",scepter_skill_name:"Enrage",scepter_new_skill:!1,has_shard:!0,shard_desc:"Earthshock applies a 1.5 second Enrage on Ursa when cast.",shard_skill_name:"Earthshock",shard_new_skill:!1},{hero_name:"npc_dota_hero_spirit_breaker",hero_id:71,has_scepter:!0,scepter_desc:"Barathrum distorts the fabric of planar space, increasing his own magic resistance and redirecting the first targeted enemy hero spell in a radius towards him.",scepter_skill_name:"Planar Pocket",scepter_new_skill:!0,has_shard:!0,shard_desc:"Increases Charge of Darkness Bonus Speed by 100.",shard_skill_name:"Charge of Darkness",shard_new_skill:!1},{hero_name:"npc_dota_hero_gyrocopter",hero_id:72,has_scepter:!0,scepter_desc:"Adds a Side Gunner that at random attacks enemy units near Gyrocopter. When Flak Cannon is active, side gunner attacks 2 units instead. Prioritizes furthest unit away within its range.",scepter_skill_name:"Flak Cannon",scepter_new_skill:!1,has_shard:!0,shard_desc:"Homing Missiles now constantly fires the current level of Rocket Barrage in a 700 area of effect after 1.0 second of being cast. This Rocket Barrage prioritizes the Homing Missile target.",shard_skill_name:"Homing Missile",shard_new_skill:!1},{hero_name:"npc_dota_hero_alchemist",hero_id:73,has_scepter:!0,scepter_desc:"Alchemist melts down Aghanim's Scepter to grant an allied hero all Aghanim's Scepter upgrades. Alchemist will gain bonus damage and spell amplification for each gifted Scepter.",scepter_skill_name:"Chemical Rage",scepter_new_skill:!1,has_shard:!0,shard_desc:`Alchemist throws a potion at an ally, applying a basic dispel and giving them attack speed, movement speed and HP regen.

DISPEL TYPE: Basic Dispel`,shard_skill_name:"Berserk Potion",shard_new_skill:!0},{hero_name:"npc_dota_hero_invoker",hero_id:74,has_scepter:!0,scepter_desc:"Creates a Cataclysm when Sun Strike is double tapped. Puts it on a 100 second cooldown. Creates 2 visible Sun Strikes within %cataclysm_min_range%-%cataclysm_max_range% range of each enemy hero. Additionally Increases the level of Quas, Wex and Exort by 1.",scepter_skill_name:"Sun Strike",scepter_new_skill:!1,has_shard:!0,shard_desc:"Increases damage for each point of mana drained by EMP and pulls enemy units into the EMP's center at 175 units per second.",shard_skill_name:"E.M.P.",shard_new_skill:!1},{hero_name:"npc_dota_hero_silencer",hero_id:75,has_scepter:!0,scepter_desc:"Global Silence applies Arcane Curse to heroes.",scepter_skill_name:"Global Silence",scepter_new_skill:!1,has_shard:!0,shard_desc:"Increases the Intelligence stolen per kill to 4.",shard_skill_name:"Brain Drain",shard_new_skill:!1},{hero_name:"npc_dota_hero_obsidian_destroyer",hero_id:76,has_scepter:!0,scepter_desc:"Damage that would bring Outworld Destroyer below 20% health triggers a strong dispel. In addition, when the effect is triggered Outworld Destroyer consumes of all his mana to create an all damage barrier equal to 70% of his maximum mana that lasts for 15 seconds. This effect can occur every 80 seconds and cannot be refreshed.",scepter_skill_name:"Essence Flux",scepter_new_skill:!1,has_shard:!0,shard_desc:"Astral Imprisonment now deals damage in an area. Also allows allies to move at 70% movement speed during Astral Imprisonment (they are visible, but untargettable and can't perform any other actions).",shard_skill_name:"Astral Imprisonment",shard_new_skill:!1},{hero_name:"npc_dota_hero_lycan",hero_id:77,has_scepter:!0,scepter_desc:"Lycan bites an ally, granting them Shapeshift properties. Lycan and the bitten target gain 40% Lifesteal and share the healing effect of Lifesteal with each other as long as they are within 1200 range of each other.",scepter_skill_name:"Wolf Bite",scepter_new_skill:!0,has_shard:!0,shard_desc:"Causes one of your creep waves to include one uncontrollable wolf that moves with the wave. Additionally, wolves spawned this way may Cripple towers.",shard_skill_name:"Summon Wolves",shard_new_skill:!1},{hero_name:"npc_dota_hero_brewmaster",hero_id:78,has_scepter:!0,scepter_desc:`Creates a Brewling based on Brewmaster's current Drunken Brawler Stance.

A new Brewling cannot be resummoned for 3s if the current one takes damage from enemy Heroes or hero-controlled units. If the Brewling dies, the ability goes on cooldown for 70 seconds.

Only one Brewling can exist at a time. If Brewmaster uses Primal Split, the existing Brewling disappears.`,scepter_skill_name:"Primal Companion",scepter_new_skill:!0,has_shard:!0,shard_desc:"Increases Primal Split duration and allows it to be cancelled early.",shard_skill_name:"Primal Split",shard_new_skill:!1},{hero_name:"npc_dota_hero_shadow_demon",hero_id:79,has_scepter:!0,scepter_desc:"Cooldown is removed, replaced with 2 charges that replenish every 60 seconds. Also causes Demonic Purge to break its target's passive abilities while active.",scepter_skill_name:"Demonic Purge",scepter_new_skill:!1,has_shard:!0,shard_desc:`Cleanses the target allied unit, removing negative buffs for the duration.  At the end of the duration, the unit is healed. Units under the effect of Disruption can still be affected by Demonic Cleanse.

DISPEL TYPE: Basic Dispel`,shard_skill_name:"Demonic Cleanse",shard_new_skill:!0},{hero_name:"npc_dota_hero_lone_druid",hero_id:80,has_scepter:!0,scepter_desc:`Lone Druid severs his link to his Spirit Bear, and connects to the target allied hero, sharing the Spirit Link bonuses with them for 20s. Armor sharing and attack speed are increased by 35%. Damage done by the ally heals Lone Druid, as well as the other way around.

 The Spirit Bear is feared for the duration of the transformation, unless he has his own Aghanim's Scepter.`,scepter_skill_name:"Spirit Link",scepter_new_skill:!1,has_shard:!0,shard_desc:`Applies a basic dispel and grants allies in an area around the caster bonus movement and attack speed. Replicates between Lone Druid and Spirit Bear regardless of castability on the other.

DISPEL TYPE: Basic Dispel`,shard_skill_name:"Savage Roar",shard_new_skill:!1},{hero_name:"npc_dota_hero_chaos_knight",hero_id:81,has_scepter:!0,scepter_desc:"Creates an illusion of allied heroes globally. Creates an additional illusion for Chaos Knight as well.",scepter_skill_name:"Phantasm",scepter_new_skill:!1,has_shard:!0,shard_desc:"Causes Chaos Bolt to create a Phantasm illusion to attack the target. This illusion deals =30% less damage.",shard_skill_name:"Chaos Bolt",shard_new_skill:!1},{hero_name:"npc_dota_hero_meepo",hero_id:82,has_scepter:!0,scepter_desc:"In MegaMeepo form, Meepo flings the topmost meepo towards a target within a %AbilityCastRange% range, dealing damage and slowing their movement speed.",scepter_skill_name:"MegaMeepo Fling",scepter_new_skill:!0,has_shard:!0,shard_desc:`Digs into the ground for a short duration, dispelling Meepo and causing him to become invulnerable and untargetable for 3s. Restores 25% of his max health over that duration.

DISPEL TYPE: Basic Dispel`,shard_skill_name:"Dig",shard_new_skill:!0},{hero_name:"npc_dota_hero_treant",hero_id:83,has_scepter:!0,scepter_desc:"Treant Protector enchants a tree, which grants him unobstructed vision in that location. If Overgrowth is cast, units within a radius of an enchanted tree will be entangled and damaged. Passively causes all trees to respawn much faster.",scepter_skill_name:"Eyes In The Forest",scepter_new_skill:!0,has_shard:!0,shard_desc:"Causes Treant to move faster and become invisible with Nature's Guise and root enemies upon attacking. Deals damage over time and roots for longer if the attack was near a tree.",shard_skill_name:"Nature's Guise",shard_new_skill:!1},{hero_name:"npc_dota_hero_ogre_magi",hero_id:84,has_scepter:!0,scepter_desc:"Blasts an enemy unit with a wave of fire, dealing 150 + 1.5x Ogre's Strength in damage and stunning the target. Its mana cost is 35% of Ogre Magi's current mana.",scepter_skill_name:"Unrefined Fireblast",scepter_new_skill:!0,has_shard:!0,shard_desc:"Creates a shield around the target ally, absorbing a percentage of the damage of next 3 attacks from enemy heroes. When damage is absorbed, a fireball is launched at the attacker. Can be cast on towers.",shard_skill_name:"Fire Shield",shard_new_skill:!0},{hero_name:"npc_dota_hero_undying",hero_id:85,has_scepter:!0,scepter_desc:"Increases strength steal.",scepter_skill_name:"Decay",scepter_new_skill:!1,has_shard:!0,shard_desc:"Tombstone can be cast on an allied hero to bunker inside of the tombstone. Heroes that enter the Tombstone cannot leave for 2 seconds nor can they re-enter after leaving. If the tombstone is destroyed with a hero inside, that hero gets stunned for 2 seconds.",shard_skill_name:"Tombstone",shard_new_skill:!1},{hero_name:"npc_dota_hero_rubick",hero_id:86,has_scepter:!0,scepter_desc:"Increases the number of spells that can be stolen to 2. Increases cast range, and upgrades spells to their Scepter version.",scepter_skill_name:"Spell Steal",scepter_new_skill:!1,has_shard:!0,shard_desc:"Allows you to target yourself or allies with Telekinesis. Throw range is 35% longer and throw delay is reduced to 0.5 seconds.",shard_skill_name:"Telekinesis",shard_new_skill:!1},{hero_name:"npc_dota_hero_disruptor",hero_id:87,has_scepter:!0,scepter_desc:"Mutes items.",scepter_skill_name:"Static Storm",scepter_new_skill:!1,has_shard:!0,shard_desc:"Increases the cast range and strike count of Thunder Strike. It can now also be ground targeted, where it will lie dormant for up to 5 seconds and attach to the first enemy that comes within the radius.",shard_skill_name:"Thunder Strike",shard_new_skill:!1},{hero_name:"npc_dota_hero_nyx_assassin",hero_id:88,has_scepter:!0,scepter_desc:"Nyx Assassin buries himself beneath the battlefield over a short duration. Once burrowed, Spiked Carapace instantly stuns nearby enemies when cast, the range of Mind Flare and Impale is increased, and Impale's cooldown is decreased. While burrowed, Nyx Assassin is stationary, unable to attack, and invisible. Nyx gains damage reduction from all damage sources.",scepter_skill_name:"Burrow",scepter_new_skill:!0,has_shard:!0,shard_desc:"Successful Vendetta attacks now increases the target's spell damage taken.",shard_skill_name:"Vendetta",shard_new_skill:!1},{hero_name:"npc_dota_hero_naga_siren",hero_id:89,has_scepter:!0,scepter_desc:"Increases cast range and projectile speed.  Allows Ensnare to target and affect Spell Immune units.",scepter_skill_name:"Ensnare",scepter_new_skill:!1,has_shard:!0,shard_desc:"Increases Song of the Siren's regen and adds mana regeneration for allies.",shard_skill_name:"Song of the Siren",shard_new_skill:!1},{hero_name:"npc_dota_hero_keeper_of_the_light",hero_id:90,has_scepter:!0,scepter_desc:"Summons Ignis Fatuus at the targeted area. Alternates on and off, drawing enemies closer with its mesmerising flicker.",scepter_skill_name:"Will-O-Wisp",scepter_new_skill:!0,has_shard:!0,shard_desc:"Increases illuminate heal",shard_skill_name:"Spirit Form",shard_new_skill:!1},{hero_name:"npc_dota_hero_wisp",hero_id:91,has_scepter:!0,scepter_desc:"Spirits now passively spawn around Io constantly every second up to the max. Spirits colliding with enemy Heroes slows them briefly. Can be activated to explode spirits.",scepter_skill_name:"Spirits",scepter_new_skill:!1,has_shard:!0,shard_desc:"Grants Overcharge Slow Resistance. Io also gains Spell Lifesteal and can now share Spell Lifesteal with its tethered target.",shard_skill_name:"Overcharge",shard_new_skill:!1},{hero_name:"npc_dota_hero_visage",hero_id:92,has_scepter:!0,scepter_desc:"Turns Visage and familiars invisible, granting Visage bonus movement speed and upgrading its movement type to flying. When Visage or its familiars leave invisibility they deal more damage for a short duration. Lasts 35 seconds. Invisibility ends when attacking or casting.",scepter_skill_name:"Silent as the Grave",scepter_new_skill:!0,has_shard:!0,shard_desc:"Grants Visage the ability to cast Gravekeeper's Cloak. Restores up to 25% of your health.",shard_skill_name:"Gravekeeper's Cloak",shard_new_skill:!1},{hero_name:"npc_dota_hero_slark",hero_id:93,has_scepter:!0,scepter_desc:"Provides charges and increases range.",scepter_skill_name:"Pounce",scepter_new_skill:!1,has_shard:!0,shard_desc:"Creates a cloud at the target location. All allies inside the radius are hidden and affected by Shadow Dance.",shard_skill_name:"Depth Shroud",shard_new_skill:!0},{hero_name:"npc_dota_hero_medusa",hero_id:94,has_scepter:!0,scepter_desc:"Causes Mystic Snake to turn enemies hit into stone. Stone duration increases with each bounce of the Mystic Snake.",scepter_skill_name:"Mystic Snake",scepter_new_skill:!1,has_shard:!0,shard_desc:"When Medusa is targeted with a spell, a single-target Mystic Snake is sent back towards the enemy.",shard_skill_name:"Cold Blooded",shard_new_skill:!0},{hero_name:"npc_dota_hero_troll_warlord",hero_id:95,has_scepter:!0,scepter_desc:`Causes Whirling Axes (Melee) to dispel Troll Warlord. Reduces cooldown and mana cost.

DISPEL TYPE: Basic Dispel`,scepter_skill_name:"Whirling Axes (Melee)",scepter_new_skill:!1,has_shard:!0,shard_desc:"Increases max Fervor stacks by 3 and grants Troll 18% + 4% chance per Fervor stack of firing an additional ranged attack to any unit within its ranged attack range plus %range_buffer%.",shard_skill_name:"Fervor",shard_new_skill:!1},{hero_name:"npc_dota_hero_centaur",hero_id:96,has_scepter:!0,scepter_desc:"Centaur hitches a cart behind him. While active, Centaur gains the benefit of Stampede for the current level of Stampede, and can cast Hitch a Ride on a target ally.",scepter_skill_name:"Work Horse",scepter_new_skill:!0,has_shard:!0,shard_desc:"Causes Double Edge to slow enemy heroes and increase Centaur's strength per hero hit for a short time. Duration refreshes per stack, up to a max of 5 stacks.",shard_skill_name:"Double Edge",shard_new_skill:!1},{hero_name:"npc_dota_hero_magnataur",hero_id:97,has_scepter:!0,scepter_desc:"Magnus tosses any enemies in front of him, launching them to his rear. Enemies take damage, spend 0.6 seconds in the air, and are stunned while in the air and an additional amount of time after landing.",scepter_skill_name:"Horn Toss",scepter_new_skill:!0,has_shard:!0,shard_desc:"Increases range, and causes Shockwave to return towards the caster's original cast location after reaching max length, hitting enemies a second time for 75% of the damage.",shard_skill_name:"Shockwave",shard_new_skill:!1},{hero_name:"npc_dota_hero_shredder",hero_id:98,has_scepter:!0,scepter_desc:"Reactive Armor can now be activated to get max stacks and 200 damage barrier. Grants Timbersaw 100 + 75 barrier amount per second for each enemy hero within %radius% radius of Timbersaw up to a maximum of 800. After 8 seconds, Timbersaw deals damage to every hero within %explosion_radius% radius equal to 200 + his remaining barrier amount and loses all of his barrier.",scepter_skill_name:"Reactive Armor",scepter_new_skill:!1,has_shard:!0,shard_desc:"Releases a flame in the direction Timbersaw is facing. Applies a debuff that deals damage per second and slows enemy movement speed. Affects buildings for reduced damage.",shard_skill_name:"Flamethrower",shard_new_skill:!0},{hero_name:"npc_dota_hero_bristleback",hero_id:99,has_scepter:!0,scepter_desc:"Adds active ability to Bristleback. Bristleback rotates towards the targeted direction and, after 0.5s, forcefully ejects 6 sequential Quill Sprays in a tight conical pattern out of his back every 0.4s. Bristleback's facing is locked during this time, he is disarmed, and his speed is reduced by -40%.",scepter_skill_name:"Bristleback",scepter_new_skill:!1,has_shard:!0,shard_desc:"Coughs a quill-packed hairball towards the target location. Erupts at the location, hitting enemies with Viscous Nasal Goo stacks and Quill Spray.",shard_skill_name:"Hairball",shard_new_skill:!0},{hero_name:"npc_dota_hero_tusk",hero_id:100,has_scepter:!0,scepter_desc:"Kicks the closest enemy unit in the drawn direction, stunning, damaging, and slowing them. Also deals damage to all heroes within 250 radius of its landing area. Cooldown is reduced by 50% if kicking a creep.",scepter_skill_name:"Walrus Kick",scepter_new_skill:!0,has_shard:!0,shard_desc:"Increases depth of Ice Shards, and enemies trapped within an ice shard are slowed and take damage per second.",shard_skill_name:"Ice Shards",shard_new_skill:!1},{hero_name:"npc_dota_hero_skywrath_mage",hero_id:101,has_scepter:!0,scepter_desc:"When Skywrath Mage casts Mystic Flare, another Mystic Flare will be created on the position of a different random target enemy within 700 range. Heroes will take priority.",scepter_skill_name:"Mystic Flare",scepter_new_skill:!1,has_shard:!0,shard_desc:"When Skywrath Mage casts Arcane Bolt, 2 bolts are created, one aimed at the original target, and the other at a random enemy within %extra_bolt_search_radius% range of the original target. Heroes will take priority.",shard_skill_name:"Arcane Bolt",shard_new_skill:!1},{hero_name:"npc_dota_hero_abaddon",hero_id:102,has_scepter:!0,scepter_desc:"Increases duration. While Borrowed Time is active, anytime an ally takes more than 525 damage while within 1200 range of Abaddon, an individual Mist Coil will automatically fire towards that ally.",scepter_skill_name:"Borrowed Time",scepter_new_skill:!1,has_shard:!0,shard_desc:"Causes Mist Coil to also deal attack damage and apply effects from items and abilities.",shard_skill_name:"Mist Coil",shard_new_skill:!1},{hero_name:"npc_dota_hero_elder_titan",hero_id:103,has_scepter:!0,scepter_desc:"Causes Elder Titan to become debuff immune and gain 50% magic resistance for 2 seconds per affected enemy Hero when the spirit returns.",scepter_skill_name:"Astral Spirit",scepter_new_skill:!1,has_shard:!0,shard_desc:"Lowers Cooldown. Echo Stomp may be placed on alt-cast to allow Elder Titan to take the place of the Astral Spirit as it completes its stomp.",shard_skill_name:"Echo Stomp",shard_new_skill:!1},{hero_name:"npc_dota_hero_legion_commander",hero_id:104,has_scepter:!0,scepter_desc:"Increases Duel duration and reduces cooldown.  Legion Commander is debuff immune for the duration of the Duel.",scepter_skill_name:"Duel",scepter_new_skill:!1,has_shard:!0,shard_desc:"Increases Duel damage by 8 per win. Applies retroactively.",shard_skill_name:"Duel",shard_new_skill:!1},{hero_name:"npc_dota_hero_techies",hero_id:105,has_scepter:!0,scepter_desc:"Increases radius and duration of Minefield Sign. When an enemy hero walks within %trigger_radius% units of a minefield sign, the 1000 units area around the sign will become a minefield for 10 seconds, dealing damage to enemy units any time they move within its area. Minefield Sign is destroyed after this effect ends.",scepter_skill_name:"Minefield Sign",scepter_new_skill:!1,has_shard:!0,shard_desc:"Reactive Tazer can be cast on allies and deals damage on detonation. Also deals damage to any enemy that attacks the affected ally.",shard_skill_name:"Reactive Tazer",shard_new_skill:!1},{hero_name:"npc_dota_hero_ember_spirit",hero_id:106,has_scepter:!0,scepter_desc:"Increases cast range, initial remnant speed, and maximum charges.",scepter_skill_name:"Fire Remnant",scepter_new_skill:!1,has_shard:!0,shard_desc:"Fire Remnants deal damage per second in an area around them. If an enemy hero dies near Ember Spirit, a Fire Remnant charge will be replenished.",shard_skill_name:"Fire Remnant",shard_new_skill:!1},{hero_name:"npc_dota_hero_earth_spirit",hero_id:107,has_scepter:!0,scepter_desc:`Earth Spirit temporarily enchants a hero, granting them the properties of a Stone Remnant. After a short duration the remnant shatters, releasing the hero and damaging nearby enemies. < br>
Can be cast on Stone Remnants. Has a 5 second cooldown when used that way.
Has a larger cast range when cast on an ally hero.`,scepter_skill_name:"Enchant Remnant",scepter_new_skill:!0,has_shard:!0,shard_desc:"Can now grab allies.",shard_skill_name:"Geomagnetic Grip",shard_new_skill:!1},{hero_name:"npc_dota_hero_abyssal_underlord",hero_id:108,has_scepter:!0,scepter_desc:"Summons a Pit of Malice around each of the portals. Reduces cooldown.",scepter_skill_name:"Fiend's Gate",scepter_new_skill:!1,has_shard:!0,shard_desc:"Firestorm can be allied targeted. When used that way, the Firestorm follows the hero around.  The wave count is increased, and tick rate / duration time occur more quickly.",shard_skill_name:"Firestorm",shard_new_skill:!1},{hero_name:"npc_dota_hero_terrorblade",hero_id:109,has_scepter:!0,scepter_desc:"Causes a wave to travel outwards in all directions forcing enemy heroes to become Feared upon impact and dealing damage, and grants Terrorblade Metamorphosis for a short time.",scepter_skill_name:"Terror Wave",scepter_new_skill:!0,has_shard:!0,shard_desc:"Costs part of Terrorblade's current HP to cast, providing Terrorblade and nearby illusions bonus movement, HP Regen and attack speed. Reflection illusions gain 50% of the bonuses. Can't be cast while in Metamorphosis and Metamorphosis will remove Demon Zeal",shard_skill_name:"Demon Zeal",shard_new_skill:!0},{hero_name:"npc_dota_hero_phoenix",hero_id:110,has_scepter:!0,scepter_desc:"Increases number of attacks to destroy Supernova and allows Phoenix to cast Supernova on an allied hero, bringing both into the sun to be reborn together.",scepter_skill_name:"Supernova",scepter_new_skill:!1,has_shard:!0,shard_desc:"Allows Sun Ray to be cast during Supernova, and slows affected enemies by 10%.",shard_skill_name:"Sun Ray",shard_new_skill:!1},{hero_name:"npc_dota_hero_oracle",hero_id:111,has_scepter:!0,scepter_desc:"Causes False Promise to have a 0.15 second fade delay invisibility and grants the ally 25% bonus Spell Damage and 0.25 reduced Base Attack Time.",scepter_skill_name:"False Promise",scepter_new_skill:!1,has_shard:!0,shard_desc:"Brings forth rain to the target area. Enemies standing in the area receive damage and have reduced heal amplification. Allies in the area heal and have increased incoming heal amplification.",shard_skill_name:"Rain of Destiny",shard_new_skill:!0},{hero_name:"npc_dota_hero_winter_wyvern",hero_id:112,has_scepter:!0,scepter_desc:"Causes Arctic Burn to be a toggle ability, draining mana every second when active. Removes limit on number of attacks per target. Increases Winter Wyvern's movement speed.",scepter_skill_name:"Arctic Burn",scepter_new_skill:!1,has_shard:!0,shard_desc:"When Cold Embrace ends, a Splinter Blast goes off at that location, hitting enemies within 1150 range. Reduces cooldown by 4.0 seconds.",shard_skill_name:"Cold Embrace",shard_new_skill:!1},{hero_name:"npc_dota_hero_arc_warden",hero_id:113,has_scepter:!0,scepter_desc:"Causes Spark Wraiths to spawn a new Spark Wraith after impacting an enemy, which then starts its 2.0 second activation period. The new Spark Wraiths last 15 seconds and has a radius of 225",scepter_skill_name:"Spark Wraith",scepter_new_skill:!1,has_shard:!0,shard_desc:"Magnetic Field slows enemies and enemy attack projectiles while they are in it. Also provides allies inside with increased attack projectile speed. Increases the radius by 75.",shard_skill_name:"Magnetic Field",shard_new_skill:!1},{hero_name:"npc_dota_hero_monkey_king",hero_id:114,has_scepter:!0,scepter_desc:"Spawns a monkey soldier near Monkey King at regular intervals. Soldiers do not spawn while invisible or on trees. Soldiers only attack buildings when Monkey King himself is nearby. Soldiers can now gain Jingu Mastery charges independently.",scepter_skill_name:"Wukong's Command",scepter_new_skill:!1,has_shard:!0,shard_desc:"When Boundless Strike is set to alt-cast, Monkey King leaps to the end of his staff as soon as Boundless Strike hits the ground, applying Primal Spring with 60% of the max channeling duration power where he lands.",shard_skill_name:"Boundless Strike",shard_new_skill:!1},{hero_name:"npc_dota_hero_dark_willow",hero_id:119,has_scepter:!0,scepter_desc:"Attacking no longer takes Dark Willow out of Shadow Realm. Each attack still has bonus damage based on the duration of the buff.",scepter_skill_name:"Shadow Realm",scepter_new_skill:!1,has_shard:!0,shard_desc:"Cursed Crown creates 4 brambles in a 175 radius around the target after the counter ends. Triggers even upon dispel. Reduces stun delay by 1 second.",shard_skill_name:"Cursed Crown",shard_new_skill:!1},{hero_name:"npc_dota_hero_pangolier",hero_id:120,has_scepter:!0,scepter_desc:"Causes Shield Crash to cast a 2-attack Swashbuckle every 90 degrees around your hero.",scepter_skill_name:"Shield Crash",scepter_new_skill:!1,has_shard:!0,shard_desc:"Pangolier curls into an immobile protective ball, gaining debuff immunity, 50% magic resistance, and allowing him to turn. Can be cast during Rolling Thunder to temporarily hit the brakes. Can cast Rolling Thunder and Shield Crash during Roll Up. If enemies attack Pangolier during this, he will roll away from the attacker, applying Rolling Thunder damage/stun if there are enemies in the way.",shard_skill_name:"Roll Up",shard_new_skill:!0},{hero_name:"npc_dota_hero_grimstroke",hero_id:121,has_scepter:!0,scepter_desc:"Creates an ink illusion of a target enemy hero. Illusion is debuff immune, has 95% magic resistance, and has bonus movement speed and attack damage.",scepter_skill_name:"Dark Portrait",scepter_new_skill:!0,has_shard:!0,shard_desc:`Causes Ink Swell to deal 30% more damage and heal the target for 30% of the damage Ink Swell deals. Upon expiration, the target will receive a strong dispel.

DISPEL TYPE: Strong Dispel`,shard_skill_name:"Ink Swell",shard_new_skill:!1},{hero_name:"npc_dota_hero_hoodwink",hero_id:123,has_scepter:!0,scepter_desc:"Decreases wind-up time and increases arrow speed.",scepter_skill_name:"Sharpshooter",scepter_new_skill:!1,has_shard:!0,shard_desc:"Tosses a boomerang in an arc. Upon contact, it returns to Hoodwink.  The boomerang will deal damage as it passes through or hits enemies, and apply a Hunter's Mark that causes affected enemies to be slowed and be more vulnerable to spell damage.",shard_skill_name:"Hunter's Boomerang",shard_new_skill:!0},{hero_name:"npc_dota_hero_void_spirit",hero_id:126,has_scepter:!0,scepter_desc:"Causes Resonant Pulse to silence and gain 2 charges.",scepter_skill_name:"Resonant Pulse",scepter_new_skill:!1,has_shard:!0,shard_desc:"Increases Aether Remnant watch range and only pulls enemy hero units. Other units take 30% damage every 1s that they are in the remnant's path, but the remnant is not destroyed. Decreases cooldown to 15s.",shard_skill_name:"Aether Remnant",shard_new_skill:!1},{hero_name:"npc_dota_hero_snapfire",hero_id:128,has_scepter:!0,scepter_desc:"Mortimer spits out the unit that's in his mouth, causing impact damage and stun in a large area. The glob leaves a pool of firespit that slows and applies damage over time. Spit Out has a no minimum launch range.",scepter_skill_name:"Spit Out",scepter_new_skill:!0,has_shard:!0,shard_desc:"Firesnap cookies become even more potent, healing the target and launching a Mortimer Kiss that does 50% impact damage to the landing destination.",shard_skill_name:"Firesnap Cookie",shard_new_skill:!1},{hero_name:"npc_dota_hero_mars",hero_id:129,has_scepter:!0,scepter_desc:"Creates 4 invulnerable soldiers on both sides of Mars front while Bulwark is toggled on. Soldiers move alongside Mars, dealing his attacks that have bonus damage, knock back and slow approaching enemies. An enemy can only be attacked by one soldier at a time.",scepter_skill_name:"Bulwark",scepter_new_skill:!1,has_shard:!0,shard_desc:"Spear of Mars impales up to 2 and leaves a fire trail behind that deals damage over time and slows movement speed.",shard_skill_name:"Spear of Mars",shard_new_skill:!1},{hero_name:"npc_dota_hero_dawnbreaker",hero_id:135,has_scepter:!0,scepter_desc:"Reduces the channel time and increases the healing and total duration of Solar Guardian's air time. Causes allies in the destination area to have evasion while Dawnbreaker is airborne. Solar Guardian can be cast again after take off to land early. While airborne, the landing point of Solar Guardian can be moved at a speed of 200.",scepter_skill_name:"Solar Guardian",scepter_new_skill:!1,has_shard:!0,shard_desc:"Dawnbreaker gains debuff immunity, 50% magic resistance, and free movement during Starbreaker. Dawnbreaker is slowed by 25% down to a minimum of 215.",shard_skill_name:"Starbreaker",shard_new_skill:!1},{hero_name:"npc_dota_hero_marci",hero_id:136,has_scepter:!0,scepter_desc:`Reduces Unleash cooldown by 10.0 seconds and causes Unleash to apply a basic dispel on Marci. While Unleash is Active, all of Marci's abilities unleash pulses when cast. All of Marci's unleash pulses will silence units for 1 seconds.

DISPEL TYPE: Basic Dispel`,scepter_skill_name:"Unleash",scepter_new_skill:!1,has_shard:!0,shard_desc:"Decreases the cooldown of Rebound, it can be cast on enemies, and causes Marci to also get the speed boost when she casts it.",shard_skill_name:"Rebound",shard_new_skill:!1},{hero_name:"npc_dota_hero_primal_beast",hero_id:137,has_scepter:!0,scepter_desc:"When Primal Beast activates Uproar, he releases 3 waves of 2 projectiles per stack of uproar each in a circle around him. Projectiles deal damage and Break enemies hit. After a short delay, each projectile splinters in two.",scepter_skill_name:"Uproar",scepter_new_skill:!1,has_shard:!0,shard_desc:`Primal Beast throws a rock at the target location that stuns and damages enemies. The rock cannot be thrown within a minimum range of Primal Beast. After landing, the rock splits into 3 additional fragments that land behind the initial target location.

 Rock Throw increases stacks of Uproar for each hero hit.`,shard_skill_name:"Rock Throw",shard_new_skill:!0},{hero_name:"npc_dota_hero_muerta",hero_id:138,has_scepter:!0,scepter_desc:`Muerta precisely shoots a hero in their soul, separating it from their physical body and knocking it 150 units away.
The soul is untargetable, muted, disarmed, and invulnerable for 4 seconds.
The body is stunned and has 35% damage reduction for this duration.

After the effect ends the hero's soul is forcefully returned to their body applying a strong dispel. The soul will survive until the end of the effect even if the hero is killed.`,scepter_skill_name:"Parting Shot",scepter_new_skill:!0,has_shard:!0,shard_desc:`Muerta gains 30% Spell Lifesteal during Pierce the Veil.
While Pierce the Veil is active Muerta permanently gains 2% spell amplification each time she kills an enemy Hero or they die in her vicinity. Bonus applies retroactively.`,shard_skill_name:"Pierce the Veil",shard_new_skill:!1}],za=_.div`
  font-size: ${c.fontSizeCommon};
  color: ${c.colorBlue};
  background-color: rgba(102, 187, 255, 0.2);
  
  .header-content {
    height: 25px;
    padding: 5px 13px 5px 13px;
    white-space: nowrap;
    display: flex;
  }

  #scepter-img {
    display: inline-block;
    height: 32px;
    width: 30px;
    padding: 4px;
    margin: -8px 6px 0px 6px;
    vertical-align: middle;
  } 

  #shard-img {
    display: inline-block;
    height: 25px;
    width: 35px;
    margin: 2px 4px;
    padding: 0 4px;
    vertical-align: middle;
  } 
`,Va=_.div`
  height: 100%;
  position: relative;
  display: inline-block;
  margin-left: 8px;
  color: ${c.colorBlue};
  font-weight: bold;
  letter-spacing: 1px;
`,Q=({image:a,type:t,children:r})=>e.createElement(za,null,e.createElement("div",{className:"header-content"},e.createElement("img",{id:`${t}-img`,src:a,alt:""}),e.createElement(Va,null,r)));Q.propTypes={image:m.string,type:m.string,children:m.oneOfType([m.arrayOf(m.node),m.node])};const ja=_.div`
  margin-left: 8px;
  color: rgb(176, 198, 212);
  max-width: 85%;

  .ability-text {
    padding: 6px;
    font-weight: normal;
    color: rgb(169, 181, 193);
    text-shadow: 1px 1px black;
  }
`,qa=_.p`
  line-height: 16px;
  color: #c8dade;  
  margin: 0px;
  padding: 0px;
  font-weight: normal;
`,Ua=_.img`
  border-radius: 4px;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 15%;
  opacity: .7;
  overflow: hidden;
  border: 1px black solid;
  height: 42px;
  transition: opacity .2s, box-shadow .4s, transform .2s;

  &:hover {
    opacity: 1;
    box-shadow: 0 0 150px rgba(255, 255, 255, .4);
    transform: scale(1.1);
  }
`,Ka=_.span`
  color: ${c.textColorPrimary};
  text-transform: uppercase;
  font-size: 1rem;
`,Ya=_.div`
  margin-top: 4px;
  line-height: 16px;
  
  & #footer {
    color: #95a5a6;
  }

  & #value {
    font-weight: 500;
  }

  & #header{
    color: #95a5a6; 
  }
`,Ja=_.div`
display: flex;
margin: 10px 9px 10px 9px;
padding: 6px;
font-weight: bold;
color: ${c.colorBlueGray};
`,Qa=_.div`
  margin-left: 13px;
  margin-right: 13px;
  height: 1px;
  background-color: #080D15;
`,Xa=_.div`
  background-color: #335380;
  text-transform: uppercase;
  color: ${c.textColorPrimary};
  text-align: center;
  font-size: 10px;
  padding: 0px 6px;
  width: 40%;
  margin: 4px 0px;
`,Za=a=>{const r=(a.attrib||[]).map(n=>e.createElement("div",{className:"attribute",key:n.key},e.createElement("span",{id:"header"},n.header," "),e.createElement("span",{id:"value"},me(n.value)),e.createElement("span",{id:"footer"}," ",n.footer||"")));return e.createElement(e.Fragment,null,r,a.dmg?e.createElement("div",{className:"attribute"},"DAMAGE: ",e.createElement("span",{id:"value"},me(a.dmg))):"")},X=({icon:a,skillName:t,isNewSkill:r,aghsDescription:n,skillObject:i,hasUpgrade:o})=>e.createElement(Ja,null,o?e.createElement(e.Fragment,null,e.createElement(Ua,{src:a}),e.createElement(ja,null,e.createElement(Ka,null,t),e.createElement(Xa,null,r?e.createElement("span",null,"New ability"):e.createElement("span",null,"Upgrade")),e.createElement(qa,null,n,i.attrib&&i.attrib.length>0&&e.createElement("div",null,e.createElement(Qa,null),e.createElement(Ya,null,Za(i)))))):e.createElement("span",null,"No Aghanim's upgrade found"));X.propTypes={icon:m.string,skillName:m.string,isNewSkill:m.bool,aghsDescription:m.string,skillObject:m.shape({}),hasUpgrade:m.bool};const ge=_.div`
  width: 340px;
  background: rgb(21, 27, 29);
  overflow: hidden;
  border: 2px solid #27292b;
`,et=_.div`
  display: flex;
  background-color: rgba(0,0,255,0.01);
  flex-direction: column;
  gap: 10px;
  margin: 0 -20px;
`,at=({upgrades:a,skills:t})=>{let r=null,n=null;const i=o=>!o||o===""?null:t.find(d=>d.data.dname===o).data;if(t&&a){const o=a.shard_skill_name,h=i(o);n=e.createElement(ge,null,e.createElement(Q,{image:"/assets/images/dota2/shard_0.png",type:"shard"},e.createElement("span",null,"Aghanim‘s Shard")),e.createElement(X,{icon:`${H.VITE_IMAGE_CDN}${h?h.img:""}`,skillName:a.shard_skill_name,hasUpgrade:a.has_shard,isNewSkill:a.shard_new_skill,aghsDescription:a.shard_desc,skillObject:h}));const d=a.scepter_skill_name,l=i(d);r=e.createElement(ge,null,e.createElement(Q,{image:"/assets/images/dota2/scepter_0.png",type:"scepter"},e.createElement("span",null,"Aghanim‘s Scepter")),e.createElement(X,{icon:`${H.VITE_IMAGE_CDN}${l?l.img:""}`,skillName:a.scepter_skill_name,hasUpgrade:a.has_scepter,isNewSkill:a.scepter_new_skill,aghsDescription:a.scepter_desc,skillObject:l}))}return e.createElement(et,null,r,n)},tt=_.div`
  background: linear-gradient(to bottom, ${c.colorBlueMuted}, ${c.primarySurfaceColor});
  border-radius: 4px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, .3);
  position: relative;
`,rt=_.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

> img {
  width: 65%;
}

.__react_component_tooltip {
  opacity: 1 !important;
  padding: 0px !important;
}
`,De=({upgrades:a,skills:t})=>e.createElement(tt,null,e.createElement(rt,null,e.createElement(ae,{id:"aghanim",effect:"solid",place:"bottom"},e.createElement(at,{type:"scepter",upgrades:a,skills:t}))));De.propTypes={upgrades:m.shape({}).isRequired,skills:m.array.isRequired};const st=_.div`
  background: linear-gradient(to bottom, ${c.colorBlueMuted}, ${c.primarySurfaceColor});
  border-radius: 4px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, .3);
  position: relative;
  width: 106%;
`,nt=_.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

.__react_component_tooltip {
  opacity: 1 !important;
  padding: 0px !important;
}
`,ke=_.img`
  width: 60%;
  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
`,it=a=>Oa.filter(r=>r.hero_name===a)[0]||{},Be=({heroName:a,skills:t})=>e.createElement(st,null,e.createElement(De,{heroName:a,upgrades:it(a),skills:t}),e.createElement(nt,{"data-for":"aghanim","data-tip":"aghanim"},e.createElement(ke,{src:"/assets/images/dota2/scepter_0.png",alt:"Aghanim's scepter"}),e.createElement(ke,{src:"/assets/images/dota2/shard_0.png",alt:"Aghanim's shard"})));Be.propTypes={heroName:m.string,skills:m.shape({})};const Y=(await ve(()=>import("./abilities-5a65fc7e.js"),[])).default,ot=(await ve(()=>import("./hero_abilities-c66253d3.js"),[])).default,lt=_.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-left: -4px;
  margin-right: -4px;
  margin-top: 16px;
`,Z=_.div`
  flex: 1 1 100%;
  margin-bottom: 4px;
  margin-top: 4px;
  max-width: 64px;
  padding-left: 4px;
  padding-right: 4px;
`,ct=a=>a.map(t=>e.createElement(Z,{key:t.key},e.createElement(Re,{...t.data,abilityID:t.key}))),Fe=({hero:a})=>{const t=d=>d.filter(l=>l!=="generic_hidden"&&Y[l].behavior!=="Hidden"),r=d=>d.map((l,u)=>({data:Y[l],key:u})),n=d=>d.map(l=>({...Y[l.name],...l})),i=d=>{const l=[];return d.forEach((u,g)=>{l[Math.floor(g/2)]||(l[Math.floor(g/2)]=[]),l[Math.floor(g/2)].push({name:u.dname})}),l},h=(d=>{const l={skills:[],talents:[]},u=d.name,g=ot[u];g.abilities=t(g.abilities),l.skills=r(g.abilities);const k=n(g.talents);return l.talents=i(k),l})(a);return e.createElement(lt,null,e.createElement(Z,null,e.createElement(Ie,{talents:h.talents})),ct(h.skills),e.createElement(Z,null,e.createElement(Be,{heroName:a.name,skills:h.skills})))};Fe.propTypes={hero:m.shape({}).isRequired};const dt=a=>({}),ht=y(dt)(Fe),fe=a=>H.VITE_IMAGE_CDN+a,_t=_.div`
  background: ${c.almostBlack};
  overflow: hidden;
  position: relative;
  border-radius: 8px;
`,pt=_.img`
  background-repeat: no-repeat;
  filter: blur(25px);
  height: 125%;
  left: -12.5%;
  object-fit: cover;
  opacity: 0.35;
  position: absolute;
  top: -12.5%;
  width: 125%;
`,mt=_.div`
  align-items: center;
  box-shadow: inset 0 0 125px rgba(0, 0, 0, 0.25);
  display: flex;
  padding: 56px;
  position: relative;

  @media screen and (max-width: ${c.wrapTablet}) {
    padding: 16px;
  }

  @media screen and (max-width: ${c.wrapMobile}) {
    display: block;
    text-align: center;
  }
`,ut=_.div`
  flex: 1 1 100%;
  margin: 0 24px;

  @media screen and (max-width: ${c.wrapMobile}) {
    margin: 12px 0;
  }
`,gt=_.img`
  border-radius: 16px;
  border: solid 1px rgba(0, 0, 0, 0.3);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
  display: block;
  flex-shrink: 0;
  height: 128px;
  object-fit: cover;
  width: 180px;

  @media screen and (max-width: ${c.wrapTablet}) {
    height: 64px;
    width: 120px;
  }

  @media screen and (max-width: ${c.wrapMobile}) {
    margin: auto;
  }
`,kt=_.div`
  font-size: 40px;
  font-weight: ${c.fontWeightMedium};
  line-height: 40px;

  @media screen and (max-width: ${c.wrapTablet}) {
    font-size: 28px;
    line-height: 28px;
  }
`,ft=_.div`
  color: ${c.primaryTextColor};
  font-size: 12px;
  letter-spacing: 1px;
  margin: 8px 0;
  text-transform: uppercase;

  @media screen and (max-width: ${c.wrapTablet}) {
    font-size: 10px;
  }
`,wt=_.span`
  color: ${c.colorMutedLight};
  word-wrap: break-word;
`,bt=_.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`,yt=_.div`
  flex: 1 1 100%;
`,$e=({hero:a})=>e.createElement(bt,null,e.createElement(_t,null,e.createElement(pt,{alt:a.localized_name,src:fe(a.img)}),e.createElement(mt,null,e.createElement(gt,{alt:a.localized_name,src:fe(a.img)}),e.createElement(ut,null,e.createElement(kt,null,a.localized_name),e.createElement(ft,null,a.attack_type," - ",e.createElement(wt,null,a.roles.join(", ")))),e.createElement(yt,null,e.createElement(Pe,{hero:a}),e.createElement(ht,{hero:a})))));$e.propTypes={hero:s.shape({})};const He=({rankings:a,strings:t})=>{const r=[{displayName:t.th_rank,displayFn:(n,i,o,h)=>Ke(h+1)},{displayName:t.th_name,displayFn:(n,i,o)=>{const h=Ye(n.rank_tier);return O.player({...n,subtitle:h},i,o)}},{displayName:t.th_score,field:"score",displayFn:n=>parseFloat(n.score).toFixed(),relativeBars:!0}];return e.createElement(P,{data:a,columns:r})};He.propTypes={rankings:s.oneOfType([s.arrayOf(s.shape({})),s.shape({})]),strings:s.shape({})};const xt=a=>({strings:a.app.strings}),vt=y(xt)(He),Et=a=>e.createElement(I,{primaryColor:"#666",secondaryColor:"#ecebeb",width:400,animate:!0,...a},e.createElement("rect",{x:"0",y:"10",rx:"5",ry:"5",width:"300",height:"5"}),e.createElement("rect",{x:"0",y:"25",rx:"5",ry:"5",width:"300",height:"5"}),e.createElement("rect",{x:"0",y:"40",rx:"5",ry:"5",width:"300",height:"5"}),e.createElement("rect",{x:"0",y:"55",rx:"5",ry:"5",width:"300",height:"5"}),e.createElement("rect",{x:"0",y:"70",rx:"5",ry:"5",width:"300",height:"5"})),St=(a,t)=>e.createElement("div",null,e.createElement(vt,{rankings:t}));class Ct extends te.Component{static propTypes={match:s.shape({params:s.shape({heroId:s.string})}),isLoading:s.bool,isError:s.bool,rankings:s.oneOfType([s.arrayOf(s.shape({})),s.shape({})]),hero:s.string,getRanking:s.func};componentDidMount(){this.props.match.params&&this.props.match.params.heroId&&this.props.getRanking(this.props.match.params.heroId)}render(){const{isLoading:t,isError:r,rankings:n,hero:i}=this.props;return e.createElement("div",null,t||r||n===null?e.createElement(Et,null):St(i,n||[]))}}const Tt=a=>({rankings:a.app.heroRanking.data.rankings,isLoading:a.app.heroRanking.loading,isError:a.app.heroRanking.error}),At=a=>({getRanking:t=>a(Je(t))}),Pt=y(Tt,At)(Ct),We=({data:a,strings:t})=>{const r=n=>Object.keys(n[0]||{}).map(i=>({displayName:t[`th_${i}`],tooltip:t[`tooltip_${i}`],field:i,displayFn:(o,h,d)=>i==="percentile"?`${d*100}%`:typeof d=="number"&&Number(d.toFixed(2))}));return e.createElement(P,{data:a,columns:r(a)})};We.propTypes={data:s.oneOfType([s.arrayOf(s.shape({})),s.shape({})]),strings:s.shape({})};const Rt=a=>({strings:a.app.strings}),Mt=y(Rt)(We),It=_.div`
  box-sizing: border-box;
  flex: 1 1 100%;
  max-width: 33.333%;
  padding: 8px;

  @media screen and (max-width: ${c.wrapTablet}) {
    max-width: 50%;
  }

  @media screen and (max-width: ${c.wrapMobile}) {
    max-width: none;
  }
`,Dt=_.div`
  font-size: 12px;
  letter-spacing: 1px;
  margin: 24px 0;
  text-align: right;
  text-shadow: 0 0 2px rgba(0, 0, 0, .3);
  text-transform: uppercase;
`,Bt={stroke:c.colorBlueGray,strokeWidth:2},Ft={background:c.almostBlack,border:0},$t={background:"transparent",border:0},Le=({data:a})=>{const t=ee();return e.createElement(It,null,e.createElement(Qe,{width:"100%",height:250},e.createElement(ga,{data:a.data,margin:{top:0,right:0,left:0,bottom:0}},e.createElement("defs",null,e.createElement("linearGradient",{id:`colorGraph-${t}`,x1:"0",y1:"0",x2:"0",y2:"1"},e.createElement("stop",{offset:"50%",stopColor:a.color,stopOpacity:".95"}),e.createElement("stop",{offset:"100%",stopColor:a.color,stopOpacity:"0"}))),e.createElement(Xe,{stroke:"rgba(255, 255, 255, .1)",strokeDasharray:"0"}),e.createElement(ye,{dataKey:"Percentage"}),e.createElement(xe,null),e.createElement(be,{dataKey:"Value",name:a.title,stroke:a.color,strokeWidth:"3",fill:`url(#colorGraph-${t})`}),e.createElement(Ze,{wrapperStyle:Ft,contentStyle:$t,cursor:Bt}))),e.createElement(Dt,null,a.title))};Le.propTypes={data:m.shape({}).isRequired};const Ht=_.div`
  display: flex;
  flex-wrap: wrap;
  margin: 48px -8px;

  @media screen and (max-width: ${c.wrapMobile}) {
    display: block;
    margin-left: 0;
    margin-right: 0;
  }
`,S=(a,t)=>a.map(r=>({Percentage:`${r.percentile*100}%`,Value:typeof r[t]=="number"&&Number(r[t].toFixed(2))})),Wt=(a,t)=>[{title:t.tooltip_gold_per_min,data:S(a,"gold_per_min"),color:c.golden},{title:t.tooltip_xp_per_min,data:S(a,"xp_per_min"),color:c.blue},{title:t.tooltip_hero_damage_per_min,data:S(a,"hero_damage_per_min"),color:c.red},{title:t.tooltip_hero_healing_per_min,data:S(a,"hero_healing_per_min"),color:c.green},{title:t.tooltip_kills_per_min,data:S(a,"kills_per_min"),color:c.yelor},{title:t.tooltip_last_hits_per_min,data:S(a,"last_hits_per_min"),color:c.colorBlueGray},{title:t.tooltip_lhten,data:S(a,"lhten"),color:c.golden},{title:t.tooltip_stuns_per_min,data:S(a,"stuns_per_min"),color:c.red}],Lt=a=>a.map(t=>e.createElement(Le,{key:t.title,data:t})),Ne=({data:a,strings:t})=>{const r=Wt(a,t);return e.createElement(Ht,null,Lt(r))};Ne.propTypes={data:m.arrayOf(m.shape({})),strings:m.shape({})};const Nt=a=>e.createElement(I,{primaryColor:"#666",secondaryColor:"#ecebeb",width:400,animate:!0,...a},e.createElement("rect",{x:"0",y:"10",rx:"5",ry:"5",width:"300",height:"5"}),e.createElement("rect",{x:"0",y:"25",rx:"5",ry:"5",width:"300",height:"5"}),e.createElement("rect",{x:"0",y:"40",rx:"5",ry:"5",width:"300",height:"5"}),e.createElement("rect",{x:"0",y:"55",rx:"5",ry:"5",width:"300",height:"5"}),e.createElement("rect",{x:"0",y:"70",rx:"5",ry:"5",width:"300",height:"5"})),Gt=(a,t,r)=>e.createElement("div",null,e.createElement(Ne,{data:t,strings:r}),e.createElement(Mt,{data:t}));class Ot extends te.Component{static propTypes={match:s.shape({params:s.shape({heroId:s.string})}),strings:s.shape({}),getBenchmark:s.func,isLoading:s.bool,isError:s.bool,hero:s.shape({}),result:s.oneOfType([s.arrayOf(s.shape({})),s.shape({})])};componentDidMount(){this.props.match.params&&this.props.match.params.heroId&&this.props.getBenchmark(this.props.match.params.heroId)}render(){const{isLoading:t,isError:r,hero:n,result:i}=this.props;return e.createElement("div",null,t||r||i===null?e.createElement(Nt,null):Gt(n,i,this.props.strings))}}const zt=a=>({isLoading:a.app.heroBenchmark.loading,isError:a.app.heroBenchmark.error,result:a.app.heroBenchmark.data.result}),Vt=a=>({getBenchmark:t=>a(ea(t))}),jt=y(zt,Vt)(Ot),qt=a=>e.createElement(I,{primaryColor:"#666",secondaryColor:"#ecebeb",width:400,animate:!0,...a},e.createElement("rect",{x:"0",y:"10",rx:"5",ry:"5",width:"300",height:"5"}),e.createElement("rect",{x:"0",y:"25",rx:"5",ry:"5",width:"300",height:"5"}),e.createElement("rect",{x:"0",y:"40",rx:"5",ry:"5",width:"300",height:"5"}),e.createElement("rect",{x:"0",y:"55",rx:"5",ry:"5",width:"300",height:"5"}),e.createElement("rect",{x:"0",y:"70",rx:"5",ry:"5",width:"300",height:"5"}));class Ge extends e.Component{static propTypes={isLoading:s.bool,isError:s.bool,result:s.oneOfType([s.arrayOf(s.shape({})),s.shape({})]),onGetRecentMatches:s.func,match:s.shape({params:s.shape({heroId:s.string})}),proPlayers:s.shape({name:s.string}),strings:s.shape({})};componentDidMount(){const{onGetRecentMatches:t,match:r}=this.props;r.params&&r.params.heroId&&t(r.params.heroId)}render(){const{isLoading:t,isError:r,result:n,proPlayers:i,strings:o}=this.props,h=[{displayName:o.th_account_id,field:"account_id",displayFn:(l,u,g)=>e.createElement("div",null,e.createElement(re,{to:`/players/${g}`},l.name?l.name:g))},{displayName:o.th_duration,tooltip:o.tooltip_duration,field:"duration",sortFn:!0,displayFn:O.duration},{displayName:o.th_result,tooltip:o.tooltip_result,field:"radiant_win",displayFn:O.radiant_win_and_game_mode},{displayName:o.th_kills,tooltip:o.tooltip_kills,field:"kills",sortFn:!0,displayFn:O.kda},{displayName:o.th_deaths,tooltip:o.tooltip_deaths,field:"deaths",sortFn:!0},{displayName:o.th_assists,tooltip:o.tooltip_assists,field:"assists",sortFn:!0}];if(r||n&&n.error)return e.createElement(se,null);const d=n.map(l=>{const u=i[l.account_id];return{name:u?u.name:void 0,...l}});return e.createElement("div",null,t||r||n===null?e.createElement(qt,null):e.createElement(P,{data:d,columns:h,paginated:!0}))}}Ge.defaultProps={result:null,isError:!1,isLoading:!1};const Ut=a=>({isLoading:a.app.heroRecentGames.loading,isError:a.app.heroRecentGames.error||!!a.app.heroRecentGames.data.error,result:a.app.heroRecentGames.data,proPlayers:Ae(a),strings:a.app.strings}),Kt={onGetRecentMatches:aa},Yt=y(Ut,Kt)(Ge),Jt=a=>e.createElement(I,{primaryColor:"#666",secondaryColor:"#ecebeb",width:400,animate:!0,...a},e.createElement("rect",{x:"0",y:"10",rx:"5",ry:"5",width:"300",height:"5"}),e.createElement("rect",{x:"0",y:"25",rx:"5",ry:"5",width:"300",height:"5"}),e.createElement("rect",{x:"0",y:"40",rx:"5",ry:"5",width:"300",height:"5"}),e.createElement("rect",{x:"0",y:"55",rx:"5",ry:"5",width:"300",height:"5"}),e.createElement("rect",{x:"0",y:"70",rx:"5",ry:"5",width:"300",height:"5"})),Qt=_.img`
  width: 50px;
  margin-right: 10px;
`,Xt=_.div`
  display: flex;
  align-items: center;
`,Zt=(a,t)=>{const r=new Map;return a.forEach(n=>r.set(n.id,n)),[{field:"hero_id",displayName:t.th_hero_id,displayFn:(n,i,o)=>{const h=r.get(o)||{};return e.createElement(Xt,null,e.createElement(Qt,{key:o,alt:h.localized_name,src:H.VITE_IMAGE_CDN+h.img}),e.createElement(re,{to:`/heroes/${o}`},h.localized_name))}},{field:"games_played",displayName:t.th_games_played,relativeBars:!0,sortFn:!0},{field:"win_rate",displayName:t.th_win,relativeBars:!0,sortFn:!0},{tooltip:t.tooltip_advantage,field:"advantage",displayName:t.th_advantage,relativeBars:!0,sortFn:!0,displayFn:(n,i,o)=>`${o}`}]};class er extends e.Component{static propTypes={isLoading:s.bool,match:s.shape({params:s.shape({heroId:s.string})}),data:s.arrayOf(s.shape({hero_id:s.number,games_played:s.number,wins:s.number})),heroes:s.arrayOf(s.shape({localized_name:s.string,img:s.string})),onGetHeroMatchups:s.func,strings:s.shape({})};componentDidMount(){const{onGetHeroMatchups:t,match:r}=this.props;r.params&&r.params.heroId&&t(r.params.heroId)}renderTable(){const{heroes:t,data:r,strings:n}=this.props,i=r.map(o=>({...o,win_rate:Math.max(0,Math.min(100,(o.wins/o.games_played*100).toFixed(2))),advantage:Math.round(Ee(o.wins,o.games_played-o.wins)*100)})).sort((o,h)=>h.games_played-o.games_played);return e.createElement(P,{data:i,columns:Zt(t,n)})}render(){const{isLoading:t}=this.props;return t?e.createElement(Jt,null):this.renderTable()}}const ar=({app:a})=>({isLoading:a.heroMatchups.loading,data:a.heroMatchups.data,heroes:a.heroStats.data,strings:a.strings}),tr={onGetHeroMatchups:ta},rr=y(ar,tr)(er),sr=_.span`
  background: rgba(0, 0, 0, .05);
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;

  &:nth-child(2n) {
    background: rgba(0, 0, 0, .15);
  }
`,f=({style:a,primary:t,children:r})=>e.createElement(sr,{style:a,primary:t},r);f.propTypes={style:s.shape({}),primary:s.bool,children:s.node};const nr=_.div`
  display: flex;
  margin-left: -8px;
  margin-right: -8px;

  @media screen and (max-width: ${c.wrapMobile}) {
    flex-wrap: wrap;
  }
`,N=_.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
  margin-top: 10px;
  padding: 8px;

  @media screen and (max-width: ${c.wrapMobile}) {
    flex-grow: 0;
    flex-shrink: 0;
    width: 50%;
  }
`,w=_.span`
  color: rgba(255, 255, 255, .5);
  flex-grow: 1;
  font-size: ${c.fontSizeSmall};
  margin-right: 5px;
  text-transform: uppercase;
`,ir=a=>Math.round(.06*a/(1+.06*a)*100),Oe=({hero:a,strings:t})=>{const r=ra(a);return e.createElement(nr,null,e.createElement(N,null,e.createElement(f,null,e.createElement(w,null,t.heading_attack,":")," ",`${r.base_attack_min} - ${r.base_attack_max}`),e.createElement(f,null,e.createElement(w,null,t.heading_attack_range,":")," ",r.attack_range),e.createElement(f,null,e.createElement(w,null,t.heading_attack_speed,":")," ",r.attack_rate),r.projectile_speed!==0&&e.createElement(f,null,e.createElement(w,null,t.heading_projectile_speed,":")," ",r.projectile_speed)),e.createElement(N,null,e.createElement(f,null,e.createElement(w,null,t.heading_base_health,":")," ",r.base_health),e.createElement(f,null,e.createElement(w,null,t.heading_base_health_regen,":")," ",r.base_health_regen),e.createElement(f,null,e.createElement(w,null,t.heading_base_mana,":")," ",r.base_mana),e.createElement(f,null,e.createElement(w,null,t.heading_base_mana_regen,":")," ",r.base_mana_regen)),e.createElement(N,null,e.createElement(f,null,e.createElement(w,null,t.heading_base_armor,":")," ",`${r.base_armor} (${ir(r.base_armor)}%)`),e.createElement(f,null,e.createElement(w,null,t.heading_base_mr,":")," ",`${r.base_mr}%`),e.createElement(f,null,e.createElement(w,null,t.heading_move_speed,":")," ",r.move_speed),e.createElement(f,null,e.createElement(w,null,t.heading_turn_rate,":")," ",r.turn_rate)),e.createElement(N,null,e.createElement(f,null,e.createElement(w,null,t.heading_legs,":")," ",r.legs),e.createElement(f,null,e.createElement(w,null,t.heading_cm_enabled,":")," ",r.cm_enabled?t.yes:t.no)))};Oe.propTypes={hero:s.shape({primary_attr:s.string,base_health:s.number,base_health_regen:s.number,base_mana:s.number,base_mana_regen:s.number,base_armor:s.number,base_mr:s.number,base_attack_min:s.number,base_attack_max:s.number,base_str:s.number,base_agi:s.number,base_int:s.number,str_gain:s.number,agi_gain:s.number,int_gain:s.number,attack_range:s.number,projectile_speed:s.number,attack_rate:s.number,move_speed:s.number,turn_rate:s.number,cm_enabled:s.bool,legs:s.number}),strings:s.shape({})};const or=a=>({strings:a.app.strings}),lr=y(or)(Oe),cr=a=>e.createElement(I,{height:200,width:500,primaryColor:"#666",secondaryColor:"#ecebeb",animate:!0,...a},e.createElement("rect",{x:"150",y:"50",rx:"5",ry:"5",width:"5",height:"100"}),e.createElement("rect",{x:"160",y:"45",rx:"5",ry:"5",width:"5",height:"105"}),e.createElement("rect",{x:"170",y:"41",rx:"5",ry:"5",width:"5",height:"109"}),e.createElement("rect",{x:"180",y:"37",rx:"5",ry:"5",width:"5",height:"113"}),e.createElement("rect",{x:"190",y:"33",rx:"5",ry:"5",width:"5",height:"117"}),e.createElement("rect",{x:"200",y:"29",rx:"5",ry:"5",width:"5",height:"121"}),e.createElement("rect",{x:"210",y:"25",rx:"5",ry:"5",width:"5",height:"125"}),e.createElement("rect",{x:"220",y:"21",rx:"5",ry:"5",width:"5",height:"129"}),e.createElement("rect",{x:"230",y:"18",rx:"5",ry:"5",width:"5",height:"132"}),e.createElement("rect",{x:"240",y:"15",rx:"5",ry:"5",width:"5",height:"135"}),e.createElement("rect",{x:"250",y:"14",rx:"5",ry:"5",width:"5",height:"136"}),e.createElement("rect",{x:"260",y:"14",rx:"5",ry:"5",width:"5",height:"136"}),e.createElement("rect",{x:"270",y:"15",rx:"5",ry:"5",width:"5",height:"135"}),e.createElement("rect",{x:"280",y:"18",rx:"5",ry:"5",width:"5",height:"132"}),e.createElement("rect",{x:"290",y:"21",rx:"5",ry:"5",width:"5",height:"129"}),e.createElement("rect",{x:"300",y:"25",rx:"5",ry:"5",width:"5",height:"125"}),e.createElement("rect",{x:"310",y:"29",rx:"5",ry:"5",width:"5",height:"121"}),e.createElement("rect",{x:"320",y:"33",rx:"5",ry:"5",width:"5",height:"117"}),e.createElement("rect",{x:"330",y:"37",rx:"5",ry:"5",width:"5",height:"113"}),e.createElement("rect",{x:"340",y:"41",rx:"5",ry:"5",width:"5",height:"109"}),e.createElement("rect",{x:"350",y:"45",rx:"5",ry:"5",width:"5",height:"105"}));class dr extends e.Component{static propTypes={match:s.shape({params:s.shape({heroId:s.string})}),onGetHeroDurations:s.func,isLoading:s.bool,data:s.arrayOf(s.shape({duration_bin:s.number,gamed_played:s.number,wins:s.number})),strings:s.shape({})};componentDidMount(){const{onGetHeroDurations:t,match:r}=this.props;r.params&&r.params.heroId&&t(r.params.heroId)}render(){const{isLoading:t,data:r,strings:n}=this.props;if(t)return e.createElement(cr,null);const i=r.map(o=>({win:o.wins,games:o.games_played,x:o.duration_bin/60})).sort((o,h)=>o.x-h.x);return e.createElement("div",null,e.createElement(sa,{columns:i,xAxisLabel:n.hero_duration_x_axis}))}}const hr={onGetHeroDurations:na},_r=({app:a})=>({isLoading:a.heroDurations.loading,data:Object.values(a.heroDurations.data),strings:a.strings}),pr=y(_r,hr)(dr),mr=a=>e.createElement(I,{primaryColor:"#666",secondaryColor:"#ecebeb",width:400,animate:!0,...a},e.createElement("rect",{x:"0",y:"10",rx:"5",ry:"5",width:"300",height:"5"}),e.createElement("rect",{x:"0",y:"25",rx:"5",ry:"5",width:"300",height:"5"}),e.createElement("rect",{x:"0",y:"40",rx:"5",ry:"5",width:"300",height:"5"}),e.createElement("rect",{x:"0",y:"55",rx:"5",ry:"5",width:"300",height:"5"}),e.createElement("rect",{x:"0",y:"70",rx:"5",ry:"5",width:"300",height:"5"}));class ur extends e.Component{static propTypes={isLoading:s.bool,data:s.arrayOf(s.shape({account_id:s.number,games_played:s.number,wins:s.number})),match:s.shape({params:s.shape({heroId:s.string})}),onGetHeroPlayers:s.func,proPlayers:s.shape({}),strings:s.shape({})};componentDidMount(){const{onGetHeroPlayers:t,match:r}=this.props;r.params&&r.params.heroId&&t(r.params.heroId)}render(){const{data:t,isLoading:r,proPlayers:n,strings:i}=this.props,o=[{field:"account_id",displayName:i.th_account_id,displayFn:(d,l,u)=>e.createElement(re,{to:`/players/${u}`},d.name||u)},{field:"games_played",displayName:i.th_games_played,relativeBars:!0,sortFn:!0},{field:"wins",displayName:i.th_win,relativeBars:!0,sortFn:!0,displayFn:(d,l,u)=>`${u}`},{tooltip:i.tooltip_advantage,field:"advantage",displayName:i.th_advantage,relativeBars:!0,sortFn:!0,displayFn:(d,l,u)=>`${u}`}];if(r)return e.createElement(mr,null);const h=t.map(d=>{const l=Math.max(0,Math.min(100,(d.wins/d.games_played*100).toFixed(2))),u=Math.round(Ee(d.wins,d.games_played-d.wins)*100),g=n[d.account_id],k=g?g.name:void 0;return{...d,wins:l,advantage:u,name:k}}).sort((d,l)=>l.games_played-d.games_played);return e.createElement(P,{data:h,columns:o,paginated:!0})}}const gr=a=>({isLoading:a.app.heroPlayers.loading,data:Object.values(a.app.heroPlayers.data),proPlayers:Ae(a),strings:a.app.strings}),kr={onGetHeroPlayers:ia},fr=y(gr,kr)(ur);function ze(a){const t=(h,d,l)=>Object.keys(l).map(u=>ca(da[u])),{onGetHeroItemSuggestions:r,match:n}=a;te.useEffect(()=>{n.params&&n.params.heroId&&r(n.params.heroId)},[r,n]);const i=[{field:"start_game_items",displayName:"Start Game",displayFn:t},{field:"early_game_items",displayName:"Early Game",displayFn:t},{field:"mid_game_items",displayName:"Mid Game",displayFn:t},{field:"late_game_items",displayName:"Late Game",displayFn:t}],o=a.data;return a.isLoading?e.createElement(oa,null):e.createElement(P,{data:o,columns:i})}ze.propTypes={match:m.shape({params:m.shape({heroId:m.string})}),isLoading:m.bool};const wr=({app:a})=>({isLoading:a.heroItemSuggestions.loading,data:Object.values(a.heroItemSuggestions.data)}),br={onGetHeroItemSuggestions:la},yr=y(wr,br)(ze),xr=_.div`
  margin-bottom: 8px;
`,vr=_.div`
  text-align: center;
`,Er=_(_a)`
  border: 1px solid rgba(0, 0, 0, .35) !important;
  margin: 8px auto !important;
  padding: 0 12px !important;
`,Sr=_.div`
  width: 100%;
`;class ne extends e.Component{constructor(t){super(t),this.toggleDetailVisibility=this.toggleDetailVisibility.bind(this)}state={detailsOpen:!1};toggleDetailVisibility(t){t.preventDefault(),this.setState({detailsOpen:!this.state.detailsOpen})}render(){const{strings:t}=this.props,r=this.props.match.params.info||"rankings",{heroId:n}=this.props.match.params,i=Sa(this.props.heroes,n);if(this.props.heroes.length===0)return e.createElement(ha,null);if(!i){const d=`Hero ${n} not found...`;return e.createElement(se,{text:d})}const o=d=>[{name:t.tab_rankings,key:"rankings",content:l=>e.createElement("div",null,e.createElement(C,{title:t.tab_rankings,subtitle:t.rankings_description}),e.createElement(Pt,{...l})),route:`/heroes/${d}/rankings`},{name:t.tab_benchmarks,key:"benchmarks",content:l=>e.createElement("div",null,e.createElement(C,{title:t.tab_benchmarks,subtitle:t.hero_disclaimer_public}),e.createElement(jt,{...l})),route:`/heroes/${d}/benchmarks`},{name:t.tab_recent,key:"recent",content:l=>e.createElement("div",null,e.createElement(C,{title:t.tab_recent,subtitle:t.hero_disclaimer_pro}),e.createElement(Yt,{...l})),route:`/heroes/${d}/recent`},{name:t.tab_matchups,key:"matchups",content:l=>e.createElement("div",null,e.createElement(C,{title:t.tab_matchups,subtitle:t.hero_disclaimer_pro}),e.createElement(rr,{...l})),route:`/heroes/${d}/matchups`},{name:t.tab_durations,key:"durations",content:l=>e.createElement("div",null,e.createElement(C,{title:t.tab_durations,subtitle:t.hero_disclaimer_pro}),e.createElement(pr,{...l})),route:`/heroes/${d}/durations`},{name:t.tab_players,key:"players",content:l=>e.createElement("div",null,e.createElement(C,{title:t.tab_players,subtitle:t.hero_disclaimer_pro}),e.createElement(fr,{...l})),route:`/heroes/${d}/players`},{name:t.tab_items,key:"items",content:l=>e.createElement(e.Fragment,null,e.createElement(C,{title:"Suggested Items",subtitle:t.hero_disclaimer_pro}),e.createElement(yr,{...l})),route:`/heroes/${d}/items`}],h=o(n).find(d=>d.key===r);return e.createElement("div",null,e.createElement(Se,{title:i.localized_name}),e.createElement(xr,null,e.createElement($e,{hero:i}),e.createElement(vr,null,e.createElement(Er,{type:"button",onClick:this.toggleDetailVisibility},this.state.detailsOpen?t.hide_details:t.show_details)),this.state.detailsOpen&&e.createElement(lr,{hero:i})),e.createElement(Sr,null,e.createElement(Ce,{info:r,tabs:o(n)}),h?h.content(this.props):null))}}const{shape:G,string:we,arrayOf:Cr}=m;ne.propTypes={match:G({params:G({info:we,heroId:we})}),heroes:Cr(G({})),strings:G({})};ne.defaultProps={heroes:[]};const Tr=a=>({isLoading:a.app.heroStats.loading,isError:a.app.heroStats.error,heroes:a.app.heroStats.data,strings:a.app.strings}),Ar=y(Tr)(ne),Pr=a=>({pro:Mr(a.strings),public:Ir(a.strings),turbo:Rr(a.strings)})[a.tabType],Rr=a=>[ie(a),{displayName:a.hero_turbo_pick_rate,field:"pickRateTurbo",sortFn:!0,displayFn:(n,i,o)=>(o*100).toFixed(1),percentBarsWithValue:n=>b(n.pickRateTurbo,n.matchCountTurbo)},{displayName:a.hero_turbo_win_rate,field:"winRateTurbo",sortFn:!0,displayFn:(n,i,o)=>(o*100).toFixed(1),percentBarsWithValue:n=>b(n.winRateTurbo,n.turbo_picks)}],Mr=a=>[ie(a),{displayName:a.hero_pick_ban_rate,field:"pickBanRatePro",sortFn:!0,percentBarsWithValue:n=>b(n.pickBanRatePro,n.matchCountPro)},{displayName:a.hero_pick_rate,field:"pickRatePro",sortFn:!0,percentBarsWithValue:n=>b(n.pickRatePro,n.matchCountPro)},{displayName:a.hero_ban_rate,field:"banRatePro",sortFn:!0,percentBarsWithValue:n=>b(n.banRatePro,n.matchCountPro)},{displayName:a.hero_win_rate,field:"winRatePro",sortFn:!0,percentBarsWithValue:n=>b(n.winRatePro,n.pro_pick)}],ie=a=>({displayName:a.th_hero_id,tooltip:a.tooltip_hero_id,field:"hero_id",displayFn:pa,sortFn:t=>J[t.hero_id]?.localized_name}),b=(a,t)=>{if(a>0){const r=a*t;return Te(Math.floor(r))}return 0},Ir=a=>{const t=[{displayName:`${a.rank_tier_overall} ${a.abbr_pick}%`,field:"pickRatePub",sortFn:!0,displayFn:(i,o,h)=>(h*100).toFixed(1),percentBarsWithValue:i=>b(i.pickRatePub,i.matchCountPub)},{displayName:`${a.rank_tier_overall} ${a.abbr_win}%`,field:"winRatePub",sortFn:!0,displayFn:(i,o,h)=>(h*100).toFixed(1),percentBarsWithValue:i=>b(i.winRatePub,i.pickCountPub)},{displayName:`${a.rank_tier_high} ${a.abbr_pick}%`,displayIcon:M(8),field:"pickRateHigh",sortFn:!0,displayFn:(i,o,h)=>(h*100).toFixed(1),percentBarsWithValue:i=>b(i.pickRateHigh,i.matchCountHigh),colColor:c.colorImmortal},{displayName:`${a.rank_tier_high} ${a.abbr_win}%`,displayIcon:M(8),field:"winRateHigh",sortFn:!0,displayFn:(i,o,h)=>(h*100).toFixed(1),percentBarsWithValue:i=>b(i.winRateHigh,i.pickCountHigh),colColor:c.colorImmortalAlt},{displayName:`${a.rank_tier_mid} ${a.abbr_pick}%`,displayIcon:M(5),field:"pickRateMid",sortFn:!0,displayFn:(i,o,h)=>(h*100).toFixed(1),percentBarsWithValue:i=>b(i.pickRateMid,i.matchCountMid),colColor:c.colorLegend},{displayName:`${a.rank_tier_mid} ${a.abbr_win}%`,displayIcon:M(5),field:"winRateMid",sortFn:!0,displayFn:(i,o,h)=>(h*100).toFixed(1),percentBarsWithValue:i=>b(i.winRateMid,i.pickCountMid),colColor:c.colorLegendAlt},{displayName:`${a.rank_tier_low} ${a.abbr_pick}%`,displayIcon:M(3),field:"pickRateLow",sortFn:!0,displayFn:(i,o,h)=>(h*100).toFixed(1),percentBarsWithValue:i=>b(i.pickRateLow,i.matchCountLow),colColor:c.colorCrusader},{displayName:`${a.rank_tier_low} ${a.abbr_win}%`,displayIcon:M(3),field:"winRateLow",sortFn:!0,displayFn:(i,o,h)=>(h*100).toFixed(1),percentBarsWithValue:i=>b(i.winRateLow,i.pickCountLow),colColor:c.colorCrusaderAlt}],r=Dr(a),n=Ve(t);return r.concat(n)},M=a=>`/assets/images/dota2/rank_icons/rank_icon_${a}.png`,Ve=(a,t)=>a.map(r=>({...r,tooltip:r.displayName,paddingRight:1,paddingLeft:4})),Dr=a=>{const t=[ie(a)];return Ve(t)};class Br extends e.Component{static propTypes={dispatchHeroStats:m.func,onGetProPlayers:m.func,data:m.oneOfType([m.shape({}),m.arrayOf(m.shape({}))]),loading:m.bool,match:m.shape({params:m.shape({info:m.string,heroId:m.string})}),strings:m.shape({})};componentDidMount(){this.props.dispatchHeroStats(),this.props.onGetProPlayers()}getMatchCountByRank=(t,r)=>t.map(n=>n[r]||0).reduce(K,0)/10;createTab=(t,r)=>{const{strings:n}=this.props,i={public:n.hero_public_tab,turbo:n.hero_turbo_tab},o={public:n.hero_public_heading,turbo:n.hero_turbo_heading},h=i[t]??n.hero_pro_tab,d=o[t]??n.hero_pro_heading;return{name:h,key:t,content:(l,u,g)=>e.createElement("div",null,e.createElement(C,{className:"top-heading with-tabbar",title:d,subtitle:`${Te(r)} ${n.hero_last_7days}`,icon:"",twoLine:!0}),e.createElement(P,{data:l,columns:u,loading:g})),route:`/heroes/${t}`}};render(){const t=this.props.match.params.heroId||"pro";if(Number.isInteger(Number(t)))return e.createElement(Ar,{...this.props});const r=this.props.data,n=r.map(p=>p.pro_pick||0).reduce(K,0)/10,i=this.getMatchCountByRank(r,"8_pick"),o=this.getMatchCountByRank(r,"7_pick"),h=this.getMatchCountByRank(r,"6_pick"),d=this.getMatchCountByRank(r,"5_pick"),l=this.getMatchCountByRank(r,"4_pick"),u=this.getMatchCountByRank(r,"3_pick"),g=this.getMatchCountByRank(r,"2_pick"),k=this.getMatchCountByRank(r,"1_pick"),x=i+o+h+d+l+u+g+k,E=r.map(p=>p.turbo_picks||0).reduce(K,0)/10,T=r.map(p=>{const v=(p.pro_pick||0)/n,F=(p.pro_ban||0)/n,L=x,A=p["8_pick"]+p["7_pick"]+p["6_pick"]+p["5_pick"]+p["4_pick"]+p["3_pick"]+p["2_pick"]+p["1_pick"],oe=p["8_win"]+p["7_win"]+p["6_win"]+p["5_win"]+p["4_win"]+p["3_win"]+p["2_win"]+p["1_win"],le=i+o+h,ce=d+l,de=u+g+k,j=p["8_pick"]+p["7_pick"]+p["6_pick"],q=p["5_pick"]+p["4_pick"],U=p["3_pick"]+p["2_pick"]+p["1_pick"],he=p["8_win"]+p["7_win"]+p["6_win"],_e=p["5_win"]+p["4_win"],pe=p["3_win"]+p["2_win"]+p["1_win"];return{...p,hero_id:p.id,heroName:J[p.id]&&J[p.id].localized_name||"",matchCountPro:n,pickBanRatePro:v+F,pickRatePro:v,banRatePro:F,winRatePro:(p.pro_win||0)/p.pro_pick,pickCountPub:A,winCountPub:oe,matchCountPub:L,pickRatePub:A/L,winRatePub:oe/A,pickCountHigh:j,winCountHigh:he,matchCountHigh:le,pickRateHigh:j/le,winRateHigh:he/j,pickCountMid:q,winCountMid:_e,matchCountMid:ce,pickRateMid:q/ce,winRateMid:_e/q,pickCountLow:U,winCountLow:pe,matchCountLow:de,pickRateLow:U/de,winRateLow:pe/U,matchCountTurbo:E,pickRateTurbo:(p.turbo_picks||0)/E,winRateTurbo:(p.turbo_wins||0)/p.turbo_picks}});T.sort((p,v)=>p.heroName&&p.heroName.localeCompare(v.heroName));const R=[this.createTab("pro",n),this.createTab("public",x),this.createTab("turbo",E)],W=R.find(p=>p.key===t),{loading:D,strings:B}=this.props;return e.createElement("div",null,e.createElement(Se,{title:B.header_heroes}),e.createElement("div",null,e.createElement(Ce,{info:t,tabs:R}),W&&W.content(T,Pr({tabType:t,strings:B}),D)))}}const Fr=a=>({data:a.app.heroStats.data,loading:a.app.heroStats.loading,strings:a.app.strings}),$r={dispatchHeroStats:ma,onGetProPlayers:ua},Wr=y(Fr,$r)(Br);export{Wr as default};
