(() => {
  'use strict';
  const repoBase = 'https://github.com/denistar490-png/';
  const thesisRepo = repoBase + 'Neural-SDE-Calibration-for-Volatility-Surface-Modelling';
  const external = (url, label) => `<a class="text-link" href="${url}" target="_blank" rel="noopener noreferrer">${label} <span aria-hidden="true">↗</span></a>`;
  const projects = {
    thesis: {
      kicker: '01 / MSc DISSERTATION · PYTHON / PYTORCH',
      html: `<h2 id="dialog-title">Neural SDE Calibration for Volatility Surface Modelling</h2>
      <p class="dialog-lead">A research framework for calibrating neural local-stochastic volatility models to a Heston reference surface, and comparing their behaviour with classical SABR and Local Volatility approaches.</p>
      <div class="dialog-links">${external(thesisRepo,'View GitHub repository')}${external(thesisRepo+'/blob/main/Instructions.md','Reproducibility notes')}</div>
      <div class="project-facts"><div><strong>7</strong><span>Sequentially trained leverage networks</span></div><div><strong>203</strong><span>Option targets: 29 moneyness levels × 7 maturities</span></div><div><strong>15</strong><span>Numbered figures in the research workflow</span></div></div>
      <section class="dialog-section"><h3>The research question</h3><p>How can neural leverage functions calibrate a stochastic volatility model across a volatility surface, and how do the resulting prices and implied volatilities compare with established models?</p></section>
      <div class="interactive-chart"><div class="chart-controls"><span>EXPLORE THE REFERENCE RESULTS</span><label for="maturity-slider">Maturity <input type="range" id="maturity-slider" min="0" max="6" step="1" value="3"><output id="maturity-value" for="maturity-slider">30 days</output></label></div><svg id="comparison-chart" class="comparison-chart" viewBox="0 0 700 300" role="img" aria-label="Heston target and neural model implied volatility at 30 days"></svg><div class="chart-legend"><span><i class="legend-line"></i> Heston target</span><span><i class="legend-line dashed"></i> Neural model</span></div><p class="chart-data-note">Actual results from the repository's accepted reference CSV. The 60-, 90- and 180-day targets are Heston extrapolations; maturities up to 30 days are market-supported Heston targets. The two curves show model comparison, rather than a live market feed.</p></div>
      <div class="method-grid"><section class="dialog-section"><h3>Method</h3><ul><li>Calibrate global SABR parameters, then freeze them while training seven maturity-specific neural leverage networks sequentially.</li><li>Use Monte Carlo simulation, a detached Black–Scholes hedge and inverse-Vega weighting in the calibration workflow.</li><li>Compare neural results with Heston targets, global Hagan SABR, simulated SABR and Local Volatility.</li></ul></section><section class="dialog-section"><h3>Evaluation & reproducibility</h3><ul><li>Inspect pricing and implied-volatility errors by maturity and market region.</li><li>Study variance reduction, independent slice evaluation and time-step sensitivity.</li><li>Use supplied parameters, histories and a trained network to regenerate figures; the repository also supports model retraining.</li></ul></section></div>
      <section class="dialog-section"><h3>Reading the results</h3><p>The Heston reference is a modelling target. Agreement with it measures calibration quality within this experiment; it does not establish future market performance. The repository separates market-supported maturities from Heston extrapolations.</p></section>`
    },
    heston: {
      kicker: '02 / FINANCIAL DATA SCIENCE · PYTHON',
      html: `<h2 id="dialog-title">Calibrating Heston to S&P 500 index options</h2><p class="dialog-lead">Estimating the Heston model's parameters from real SPX put options, then reconstructing the implied-volatility smile and surface to understand both the fit and its limitations.</p><div class="dialog-links">${external(repoBase+'heston-spx-options-calibration','View GitHub repository')}${external(repoBase+'heston-spx-options-calibration/blob/main/report.pdf','Read full report')}</div>
      <div class="project-facts"><div><strong>4.78%</strong><span>Approximate implied-volatility RMSE</span></div><div><strong>SPX puts</strong><span>Calibration instruments</span></div><div><strong>Python</strong><span>Financial Data Science coursework</span></div></div>
      <div class="method-grid"><section class="dialog-section"><h3>The approach</h3><ul><li>Implement Black–Scholes pricing and numerical implied-volatility inversion.</li><li>Price Heston options semi-analytically using the model's characteristic function and numerical integration.</li><li>Calibrate with differential evolution against implied volatilities.</li></ul></section><section class="dialog-section"><h3>What the fit tells us</h3><p>The model captures the broad downward-sloping equity-index volatility skew. Larger errors remain for short-maturity, deep out-of-the-money puts. Ultra-short maturities below 0.02 years are excluded from calibration.</p></section></div>
      <figure class="project-figure"><img src="assets/heston-smiles.png" alt="Original project figure comparing Heston and market implied-volatility smiles at selected maturities" loading="lazy"><figcaption>Original research output · Market versus Heston implied-volatility smiles.</figcaption></figure><figure class="project-figure"><img src="assets/heston-surfaces.png" alt="Original project figure comparing reconstructed market and Heston implied-volatility surfaces" loading="lazy"><figcaption>Original research output · Market and calibrated Heston volatility surfaces.</figcaption></figure>
      <section class="dialog-section"><h3>Reproducible work</h3><p>The repository includes the Python implementation, cleaned option data, calibrated parameters and the full academic report.</p></section>`
    },
    learning: {
      kicker: '03 / STATISTICAL LEARNING · R',
      html: `<h2 id="dialog-title">Predicting market direction with statistical learning</h2><p class="dialog-lead">Can lagged returns and trading volume predict the S&P 500's next-day direction? An academic comparison of a radial-basis support vector classifier and a single-hidden-layer neural network.</p><div class="dialog-links">${external(repoBase+'sp500-market-direction-ml','View GitHub repository')}${external(repoBase+'sp500-market-direction-ml/blob/main/report.pdf','Read full report')}</div>
      <div class="project-facts"><div><strong>1,250</strong><span>Daily observations in Smarket</span></div><div><strong>2001–04</strong><span>Chronological training period</span></div><div><strong>2005</strong><span>Unseen test period</span></div></div>
      <section class="dialog-section"><h3>The workflow</h3><p>Exploratory analysis, feature scaling and hyperparameter tuning precede evaluation on a chronological holdout. The Year and Today variables are removed before modelling to reduce leakage.</p><table class="data-table"><caption class="tiny-label">Reported model results</caption><thead><tr><th scope="col">Model</th><th scope="col">Accuracy</th><th scope="col">Sensitivity</th><th scope="col">Specificity</th></tr></thead><tbody><tr><td>RBF-kernel SVC</td><td>55.56%</td><td>15.32%</td><td>87.23%</td></tr><tr><td>Neural network</td><td>51.59%</td><td>53.15%</td><td>50.35%</td></tr></tbody></table><p class="research-note">The repository reports a 51.84% majority baseline across the full dataset. This is a dataset-wide reference, rather than a separately reported 2005 holdout baseline. The SVC's low sensitivity also shows why accuracy alone gives an incomplete picture.</p></section>
      <div class="method-grid"><section class="dialog-section"><h3>Models & tuning</h3><p>RBF SVC: cost = 1, gamma = 5.<br>Neural network: 3 hidden neurons, decay = 0.1.<br>Implemented in R with e1071, caret and nnet.</p></section><section class="dialog-section"><h3>Key takeaway</h3><p>Lagged returns and volume provide limited predictive power in this study. The project places the small accuracy differences in the context of class-level performance and market efficiency.</p></section></div>
      <figure class="project-figure"><img src="assets/market-correlations.png" alt="Original project correlation heatmap of lagged S&P 500 returns and trading volume" loading="lazy"><figcaption>Original research output · Weak linear relationships among predictors.</figcaption></figure>`
    }
  };
  const menuButton = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('#mobile-nav');
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    menuButton.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation');
    mobileNav.hidden = open;
  });
  mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    mobileNav.hidden = true;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
  }));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !mobileNav.hidden) {
      mobileNav.hidden = true;
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation');
      menuButton.focus();
    }
  });
  const dialog = document.querySelector('#project-dialog');
  let lastTrigger;
  document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
    const project = projects[button.dataset.project];
    if (!project) return;
    lastTrigger = button;
    document.querySelector('#dialog-kicker').textContent = project.kicker;
    document.querySelector('#dialog-content').innerHTML = project.html;
    dialog.showModal();
    dialog.scrollTop = 0;
    document.body.classList.add('modal-open');
    if (button.dataset.project === 'thesis') {
      const slider = document.querySelector('#maturity-slider');
      slider.addEventListener('input', () => drawComparison(Number(slider.value)));
      drawComparison(3);
    }
  }));
  document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('modal-open');
    lastTrigger?.focus();
  });
  function drawComparison(index) {
    const maturities = [8,15,22,30,60,90,180];
    const day = maturities[index];
    const data = (window.thesisData || []).filter(row => row.day === day);
    const svg = document.querySelector('#comparison-chart');
    document.querySelector('#maturity-value').textContent = `${day} days`;
    svg.setAttribute('aria-label', `Heston target and neural model implied volatility at ${day} days. Horizontal axis: forward log-moneyness. Vertical axis: implied volatility in percent.`);
    const values = data.flatMap(row => [row.target,row.neural]).filter(Number.isFinite);
    const min = Math.floor(Math.min(...values)*100/5)*5-1;
    const max = Math.ceil(Math.max(...values)*100/5)*5+1;
    const xMin = Math.min(...data.map(row => row.m));
    const xMax = Math.max(...data.map(row => row.m));
    const x = value => 60 + (value-xMin)/(xMax-xMin)*610;
    const y = value => 240 - (value*100-min)/(max-min)*210;
    let markup = '';
    for(let i=0;i<=4;i++){
      const value=min+(max-min)*i/4;
      const py=240-i*210/4;
      markup+=`<line class="grid-line" x1="60" y1="${py}" x2="670" y2="${py}"/><text x="47" y="${py+4}" text-anchor="end">${value.toFixed(0)}%</text>`;
    }
    for(const value of [-.2,-.1,0,.08]) markup+=`<text x="${x(value)}" y="264" text-anchor="middle">${value.toFixed(2)}</text>`;
    for(const [key,css] of [['target','target-line'],['neural','neural-line']]) {
      let path='', connected=false;
      data.forEach(row => {
        if(!Number.isFinite(row[key])) { connected=false; return; }
        path+=`${connected?'L':'M'}${x(row.m).toFixed(2)},${y(row[key]).toFixed(2)} `;
        connected=true;
      });
      markup+=`<path class="${css}" d="${path}"/>`;
    }
    markup+='<text x="365" y="292" text-anchor="middle">FORWARD LOG-MONEYNESS</text><text x="60" y="15">IMPLIED VOLATILITY</text>';
    svg.innerHTML=markup;
  }
  const email = 'denismarino000@gmail.com';
  document.querySelector('#copy-email').addEventListener('click', async () => {
    const status = document.querySelector('#copy-status');
    try {
      if(navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(email);
      else {
        const input=document.createElement('textarea');input.value=email;input.style.position='fixed';input.style.opacity='0';document.body.appendChild(input);input.select();const copied=document.execCommand('copy');input.remove();if(!copied)throw new Error('Clipboard unavailable');
      }
      status.textContent='Email address copied.';
    } catch {
      status.textContent='Select the email address above to copy it, or click to open your email app.';
    }
  });
  document.querySelector('#year').textContent = new Date().getFullYear();
})();
