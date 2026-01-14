---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if site.author.googlescholar %}
  <div class="wordwrap">You can also find my articles on <a href="{{site.author.googlescholar}}">my Google Scholar profile</a>.</div>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
# Selected Publications
## Adversarially Robust Multitask Adaptive Control


1) K. Fallah*, L. F. Toso*, J. Anderson (2025). [Adversarially Robust Multitask Adaptive Control](https://arxiv.org/abs/2511.05444)

^* = Alphabetical equal contribution.
### Overview

The project studies how multiple control systems—each with uncertain or partially known dynamics—can **collaboratively learn stabilizing controllers** while remaining robust to **heterogeneous models** and **adversarial (Byzantine) participants**.

At the core of the method is a **clustered multitask learning pipeline** (illustrated below), which integrates  
1. **Data collection** from multiple agents operating under certainty-equivalent controllers,  
2. **Clustered system identification (CSI)** to group dynamically similar systems,  
3. **Resilient aggregation** of model updates using *(f, λ)*-resilient rules such as the trimmed mean or geometric median, and  
4. **Controller synthesis** via the discrete algebraic Riccati equation (DARE) for each identified cluster.  

<p align="center">
  <img src="figures/pipeline.png" width="600">
</p>
<p align="center"><em>Figure 1: Workflow for adversarially robust multitask adaptive control.</em></p>

This joint learning–control loop iteratively refines both the model estimates and the feedback gains, guaranteeing stable trajectories and **sublinear cumulative regret**.  
Theoretical analysis shows that the expected regret for any honest system in cluster C<sub>j</sub> scales as:


$$\mathbb{E}[R_T^{(i)}] = \tilde{\mathcal{O}}\left(\frac{\sqrt{dT}}{m_j}+ \lambda\sqrt{dT}+ \epsilon_{\mathrm{het}}^2 T\right)$$


### Simulations

<!-- 2×3 gallery; requires PNGs in /figures. If only PDFs exist, the links below still work. -->
<table>
  <tr>
    <td align="center">
      <img src="figures/png/fig1_homogeneous_overlay.png" width="380"><br>
      <sub><b>(a) Homogeneous clusters</b> — collaboration reduces regret ≈ 1/√(cluster size).</sub>
    </td>
    <td align="center">
      <img src="figures/png/fig2_hetrogeneous_overlay.png" width="380"><br>
      <sub><b>(b) Heterogeneous clusters</b> — bias floor ∝ ε<sub>het</sub><sup>2</sup>·T.</sub>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="figures/png/fig3_misclassification_overlay.png" width="380"><br>
      <sub><b>(c) Misclassification rate</b> — decays rapidly with more data per cluster.</sub>
    </td>
    <td align="center">
      <img src="figures/png/fig5_byzantine_ratios.png" width="380"><br>
      <sub><b>(d) Adversarial ratios</b> — sublinear regret sustained up to 30% corruption.</sub>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="figures/png/fig6_aggregation_compare.png" width="380"><br>
      <sub><b>(e) Aggregators</b> — trimmed mean vs geometric median (λ-resilient).</sub>
    </td>
    <td align="center">
      <img src="figures/png/fig6:sharedrepresentation.png" width="380"><br>
      <sub><b>(f) Shared representation</b> — RCSI remains robust without a global model.</sub>
    </td>
  </tr>
</table>


Full details and codes can be found in this [repository](https://github.com/jd-anderson/multi_task_adaptive_control/tree/main) 


