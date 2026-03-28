---
layout: page
title: Robust Data-Driven Control
description: Distributionally robust and chance-constrained approaches to ensure safety and reliability when controlling from data.
img: assets/img/wasserstein_ball.png
importance: 2
---

A central challenge in data-driven control is ensuring that controllers designed from noisy, finite data remain safe and performant when deployed on real systems. Our research addresses this challenge through distributionally robust optimization, where we account for the worst-case distribution of uncertainty within a Wasserstein ball centered on the empirical data distribution.

We have developed distributionally robust chance-constrained formulations of data-enabled predictive control that provide probabilistic guarantees on constraint satisfaction, even when the data is corrupted by noise of unknown distribution. This approach bridges the gap between the theoretical elegance of data-driven methods and the practical need for safety guarantees. We have also developed methods for behavioral uncertainty quantification, enabling principled reasoning about the set of systems consistent with observed data.

Key papers include distributionally robust DeePC (IEEE TAC 2021), behavioral uncertainty quantification (CDC 2022), and the robust fundamental lemma (MTNS 2022).
