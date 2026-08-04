var translations = {
  en: {
    'tab-accueil': 'Home',
    'tab-conciergerie': 'Concierge',
    'tab-intendance': 'Villa Management',
    'accueil-h1': 'Bassin-Villas — Concierge, property services',
    'brand-text': 'Bassin-Villas<br>Concierge, property services',
    'conciergerie-title': 'Concierge Services',
    'conciergerie-tagline': 'Rates and rental management services',
    'acc1-summary': '1. Our "Full Management" Package (Turnkey)',
    'acc1-body': '<p class="doc-intro"><em>The ideal solution to fully delegate and maximise your rental income with peace of mind.</em></p><p>Our Commission: <span class="price-badge">20% incl. VAT</span> <em>(Calculated only on the rental income generated)</em></p><p>What’s included in our package:</p><ul class="doc-list"><li>📷 Property showcasing: Photo shoot and optimised listing copywriting.</li><li>🌐 Multi-channel distribution: Publishing and calendar syncing across leading platforms (Airbnb, Booking.com, Abritel).</li><li>📈 Yield Management: Dynamic pricing based on seasonality and local events.</li><li>💬 Guest relations 7/7: Booking management, answering questions and assistance during the stay.</li><li>🔑 Check-in and Check-out: Managing entries (in person or connected locks) and check-out with property inspection.</li><li>🧺 Cleaning coordination: Scheduling professional cleaning and linen service between each guest.</li></ul>',
    'acc2-summary': '2. Our "On-Demand" Services',
    'acc2-body': '<p class="doc-intro"><em>Managing your listings remotely and need a trusted local partner? Choose our services on demand.</em></p><p class="doc-subhead">Check-in &amp; Logistics</p><ul class="doc-list"><li><strong>Check-in only</strong> (Key handover + welcome booklet): <span class="price-badge">from €35</span></li><li><strong>Check-out only</strong> (Property inspection + key collection): <span class="price-badge">from €35</span></li><li><strong>Check-in &amp; Check-out Pack</strong> (Same day): <span class="price-badge">from €60</span></li><li><strong>Emergency call-out / Repair</strong> (Parts not included): <span class="price-badge">€45 / hour</span></li></ul><p class="doc-subhead">Cleaning &amp; Linen</p><p class="doc-intro"><em>Rates vary according to property size (Studio to Villa).</em></p><ul class="doc-list"><li><strong>Professional Cleaning Package</strong>: <span class="price-badge">€50 to €150</span> <em>(Usually charged to the guest)</em></li><li><strong>Linen rental</strong> (Double bed kit + towels): <span class="price-badge">€27 / bed</span></li><li><strong>Low-season watch / Caretaking</strong> (2 visits per month): <span class="price-badge">€80 / month</span></li></ul>',
    'intendance-title': 'Villa Property Management &amp; Watch Service Proposal',
    'acc3-summary': 'Why choose my service?',
    'acc3-body': '<ul class="doc-list"><li>Local presence: Resident in Arcachon, immediate proximity and fast response.</li><li>Operational experience: skilled in managing co-ownerships and large-scale portfolios</li></ul>',
    'acc4-summary': 'Surveillance and Watch (The core of the service)',
    'acc4-body': '<ul class="doc-list"><li>Regular visits: 1 to 2 times a week to check the general condition (inside/outside).</li><li>After bad weather: Systematic visit after strong wind or a storm (very common on the Bassin) to check roofs, windows and possible water infiltration.</li><li>Airing out: Opening windows to prevent damp and the "stuffy" smell typical of seaside homes.</li><li>Mail collection: Forwarding or handling urgent bills/notices.</li></ul>',
    'acc5-summary': 'Maintenance Management (The "Conductor")',
    'acc5-body': '<ul class="doc-list"><li>Contract follow-up: Landscaping/gardening companies, pool maintenance follow-up, security and alarm companies, etc.</li><li>Contractor supervision: Letting tradespeople in, overseeing repair work and checking the job before the tradesperson leaves.</li><li>Minor maintenance: Changing a light bulb, checking the heating works properly before winter. <em>(Quote on request)</em></li></ul>',
    'acc6-summary': 'Monthly Base Package "Peace of Mind &amp; Watch"',
    'acc6-body': '<p>Indicative monthly rate based on property size: <span class="price-badge">€450 to €650</span></p><p>This fixed package guarantees the security and upkeep of your property all year round.</p><ul class="doc-list"><li>Weekly watch: Visit once a week (access control, leak checks, airing out, mail collection).</li><li>Post-storm watch: Systematic visit after every storm or strong wind on the Bassin (roof check, garden inspection).</li><li>Contractor management: Welcoming and overseeing outside service providers after a visit (gardener, pool technician, tradespeople, etc.).</li><li>Reporting: Update by SMS or email (report + digital photos) if anything unusual occurs.</li></ul>',
    'acc7-summary': 'Concierge Service ("The Luxe")',
    'acc7-body': '<ul class="doc-list"><li>Per-visit package for full property set-up before arrival: <span class="price-badge">€85 to €140</span><br><em>Opening the shutters, turning on heating/air conditioning, setting up outdoor furniture, custom welcome grocery list (purchases billed at cost against receipts).</em><br><em>Closing: Full property security after departure — checking installations, cutting off supplies if required, closing everything up, arming the alarm and securing the shutters.</em></li><li>Emergency call-out package, per visit (Daytime): <span class="price-badge">€100 + €40 / hour</span></li><li><em>Depending on the time of year, rapid response following an alarm trigger, suspected break-in, technical issue, bad weather, etc.</em></li></ul>',
    'acc8-summary': 'Technical Services (on request)',
    'acc8-body': '<p>These services are billed in addition to the base package.</p><ul class="doc-list"><li>Cleaning and upkeep charged by the hour: <span class="price-badge">€35 to €40</span><br><em>Thorough cleaning before/after a stay, care of fine materials (marble, parquet, terraces).</em></li></ul><p class="doc-underline">Any specific request can be quoted as a custom fixed-price proposal.</p>',
    'tab-contact': 'Contact',
    'contact-title': 'Bassin-Villas',
    'contact-phone': 'Phone: 06 38 22 82 82',
    'contact-email': 'bassin.villas@gmail.com',
    'contact-summary': 'Contact us',
    'label-name': 'Name',
    'label-email': 'Email',
    'label-phone': 'Phone',
    'label-message': 'Message',
    'btn-send': 'Send',
    'contact-success': 'Thank you, your message has been sent!',
    'contact-error': 'Something went wrong. Please try again or call us directly.'
  }
};

var originals = {};
document.querySelectorAll('[data-i18n]').forEach(function (el) {
  originals[el.dataset.i18n] = el.textContent;
});
document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
  originals[el.dataset.i18nHtml] = el.innerHTML;
});

var currentLang = localStorage.getItem('bv-lang') || 'fr';

function applyLang(lang) {
  var dict = lang === 'en' ? translations.en : null;
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var key = el.dataset.i18n;
    el.textContent = dict ? dict[key] : originals[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
    var key = el.dataset.i18nHtml;
    el.innerHTML = dict ? dict[key] : originals[key];
  });
  document.documentElement.lang = lang;
  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.textContent = lang === 'en' ? 'FR' : 'EN';
  });
  currentLang = lang;
  localStorage.setItem('bv-lang', lang);
}

document.querySelectorAll('.lang-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    applyLang(currentLang === 'en' ? 'fr' : 'en');
  });
});

applyLang(currentLang);
