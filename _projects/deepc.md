---
layout: page
title: Data-Enabled Predictive Control (DeePC)
description: Using raw data directly for predictive control of complex systems, bypassing the need for explicit models.
img: assets/img/deepc_cartoon.png
importance: 1
---

Data-Enabled Predictive Control (DeePC) is a control framework that uses measured input-output data to directly predict and optimize future system behavior, without first identifying a parametric model. By leveraging Willems' fundamental lemma, DeePC replaces the traditional model identification step with a data-driven representation of the system's behavior, enabling real-time optimal control directly from data.

Our work on DeePC spans the full spectrum from theory to practice. On the theoretical side, we have developed regularization techniques that make DeePC robust to noise and model mismatch, drawing connections between regularized DeePC and classical system identification approaches. On the practical side, we have demonstrated DeePC on quadrotor helicopters, showing that the approach can handle the nonlinearities and disturbances present in real-world robotic systems.

Key papers include the original DeePC formulation (ECC 2019), regularized and distributionally robust extensions (CDC 2019, IEEE TAC 2021), and experimental validation on quadcopters (IJRNC 2021).
