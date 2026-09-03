document.addEventListener('DOMContentLoaded',()=>{
 const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
 const money=v=>typeof v==='number'?`${v.toLocaleString('ar-EG')} ج.م.`:v;
 const file=location.pathname.split('/').pop()||'index.html';
 $$('a[href]').forEach(a=>{const href=a.getAttribute('href');if(href===file)a.classList.add('active')});
 const toggle=$('.menu-toggle'), mobile=$('.mobile-menu');
 if(toggle&&mobile) toggle.addEventListener('click',()=>{const open=mobile.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
 $$('[data-brand-name]').forEach(e=>e.textContent=RESTAURANT.brand.nameArabic);
 $$('[data-tagline]').forEach(e=>e.textContent=RESTAURANT.brand.taglineArabic);
 $$('[data-phone]').forEach(e=>{e.textContent=RESTAURANT.contact.phoneDisplay;e.href=`tel:${RESTAURANT.contact.phone}`});
 const wa=`https://wa.me/${RESTAURANT.contact.whatsappNumber}?text=${encodeURIComponent(RESTAURANT.contact.whatsappDefaultMessage)}`;
 $$('[data-whatsapp]').forEach(e=>e.href=wa);
 $$('[data-reserve]').forEach(e=>e.href=`https://wa.me/${RESTAURANT.reservation.whatsappNumber}?text=${encodeURIComponent(RESTAURANT.reservation.defaultMessage)}`);
 const status={ 'pre-launch':'قريباً — طنط ناهد هتفتح أبوابها ❤️','opening-soon':'الافتتاح قرب ❤️','open':'طنط ناهد مفتوحة ومستنياك ❤️','temporarily-closed':'طنط ناهد مقفولة مؤقتاً — هنرجع قريب ❤️'};
 $$('[data-status]').forEach(e=>e.textContent=status[RESTAURANT.businessStatus]||status['pre-launch']);
 $$('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());
 const meta=(name,content,attr='name')=>{if(!content)return;let e=document.head.querySelector(`meta[${attr}="${name}"]`);if(!e){e=document.createElement('meta');e.setAttribute(attr,name);document.head.appendChild(e)}e.content=content};
 meta('description',RESTAURANT.seo.metaDescription);meta('keywords',RESTAURANT.seo.keywords);meta('og:title',RESTAURANT.seo.ogTitle,'property');meta('og:description',RESTAURANT.seo.ogDescription,'property');meta('og:type','website','property');meta('og:locale','ar_EG','property');
 if(RESTAURANT.seo.canonical){let l=$('link[rel="canonical"]')||document.createElement('link');l.rel='canonical';l.href=RESTAURANT.seo.canonical;document.head.appendChild(l)}
 const schema={"@context":"https://schema.org","@type":"Restaurant",name:RESTAURANT.brand.nameArabic,description:RESTAURANT.brand.shortDescription,telephone:RESTAURANT.contact.phone,servesCuisine:'Egyptian',priceRange:'$$',url:location.href};
 const sd=document.createElement('script');sd.type='application/ld+json';sd.textContent=JSON.stringify(schema);document.head.appendChild(sd);
 const featured=$('#featured-dishes');
 if(featured){const list=RESTAURANT.signatureDishIds.map(id=>RESTAURANT.menu.find(d=>d.id===id)).filter(Boolean).slice(0,8);featured.innerHTML=list.map(d=>`<article class="card"><div class="card-media"><img loading="lazy" src="${d.image}" alt="${d.nameArabic}"><span class="badge">${d.popular?'الأكثر طلباً':'اختيار طنط ناهد'}</span></div><div class="card-body"><h3>${d.nameArabic}</h3><p>${d.descriptionArabic}</p><div class="price">${money(d.price)}</div></div></article>`).join('')}
 const menuRoot=$('#full-menu');
 if(menuRoot){const order=['breakfast','starters','home-style','koshary','rice-mahashi','meat','chicken','tagines','pigeon','seafood','desserts','drinks'];menuRoot.innerHTML=order.map(cat=>{const dishes=RESTAURANT.menu.filter(d=>d.category===cat&&d.available);if(!dishes.length)return '';return `<section class="menu-section" id="${cat}"><h2>${CATEGORIES[cat]?.label||cat}</h2><div class="menu-grid">${dishes.map(d=>`<article class="menu-item"><img loading="lazy" src="${d.image}" alt="${d.nameArabic}"><div><h3>${d.nameArabic}</h3><p>${d.descriptionArabic}</p><div class="meta">${d.vegetarian?'<span class="chip">نباتي</span>':''}${d.spicy?'<span class="chip">🌶️ حراق</span>':''}${d.popular?'<span class="chip">الأكثر طلباً</span>':''}${d.featured?'<span class="chip">مميز</span>':''}</div><div class="menu-price">${money(d.price)}</div></div></article>`).join('')}</div></section>`}).join('');const nav=$('#category-nav');if(nav)nav.innerHTML=order.filter(c=>RESTAURANT.menu.some(d=>d.category===c&&d.available)).map(c=>`<a href="#${c}">${CATEGORIES[c].label}</a>`).join('')}
 const gallery=$('#gallery-grid');if(gallery)gallery.innerHTML=RESTAURANT.gallery.map(g=>`<figure class="gallery-item"><img loading="lazy" src="${g.image}" alt="${g.altArabic}"><figcaption>${g.caption}</figcaption></figure>`).join('');
 const reviews=$('#reviews');if(reviews)reviews.innerHTML=RESTAURANT.reviews.length?RESTAURANT.reviews.map(r=>`<article class="contact-card"><strong>${r.customerName}</strong><p>“${r.review}”</p></article>`).join(''):`<div class="contact-card"><strong>لسه بنستنى أول رأي منكم ❤️</strong><p>مش هنحط تقييمات مصطنعة. أول ما طنط ناهد تفتح، آراء الناس الحقيقية هتكون هنا.</p></div>`;
 $$('[data-address]').forEach(e=>e.textContent=RESTAURANT.contact.address);$$('[data-email]').forEach(e=>{e.textContent=RESTAURANT.contact.email;if(RESTAURANT.contact.email.includes('@'))e.href=`mailto:${RESTAURANT.contact.email}`});
 const hours=$('#hours');if(hours)hours.innerHTML=Object.entries(RESTAURANT.hours).map(([d,h])=>`<div><strong>${d}</strong><span>${h}</span></div>`).join('');
 const socials=[['Instagram',RESTAURANT.contact.instagram],['Facebook',RESTAURANT.contact.facebook],['TikTok',RESTAURANT.contact.tiktok],['Google Business',RESTAURANT.contact.googleBusiness]];$$('[data-social-links]').forEach(root=>root.innerHTML=socials.filter(([,u])=>u).map(([n,u])=>`<a class="btn btn-secondary" href="${u}" target="_blank" rel="noopener">${n}</a>`).join('')||'<span class="pill">السوشيال هتعلن قريباً</span>');
 $$('img').forEach(img=>img.addEventListener('error',()=>{if(!img.dataset.fallback){img.dataset.fallback='1';img.src='images/brand/logo.svg'}}));
});
