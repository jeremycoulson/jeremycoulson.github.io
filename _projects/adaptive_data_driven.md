---
layout: page
title: Adaptive Data-Driven Control
description: Real-time adaptation of data-driven controllers using streaming data.
img: assets/img/subspace_tracking.pdf
importance: 3
---

Real systems change. Dynamics shift, operating conditions vary, and a controller designed from yesterday's data may not work well today. This project asks: how can a controller continuously learn from new data and adapt in real time?

We develop online subspace tracking algorithms that use streaming data to recursively identify the behavior of an unknown or time-varying dynamical system, even when the system's complexity (e.g., model order) is itself unknown or changing. These algorithms operate can be integrated directly into data-enabled predictive control frameworks for adaptive, real-time control.