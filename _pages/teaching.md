---
layout: page
permalink: /teaching/
title: teaching
description:
nav: true
nav_order: 6
---

{% assign teaching_by_institution = site.data.teaching | group_by: "institution" %}

{% for group in teaching_by_institution %}
### {{ group.name }}
___

<div class="row">
  {% for course in group.items %}
  <div class="col-md-6 mb-4">
    <div class="card h-100">
      {% if course.image %}
        {% include figure.liquid
           path=course.image
           class="card-img-top img-fluid rounded"
           alt=course.title %}
      {% endif %}

      <div class="card-body text-center">
        <h5 class="card-title mb-1">
          {% if course.url %}
            <a href="{{ course.url }}">{{ course.title }}</a>
          {% else %}
            {{ course.title }}
          {% endif %}
        </h5>

        {% if course.code %}
        <p class="card-text small text-muted mb-1">
          {{ course.code }}
        </p>
        {% endif %}

        {% if course.terms %}
        <p class="card-text small text-muted">
          {{ course.terms }}
        </p>
        {% endif %}
      </div>
    </div>
  </div>
  {% endfor %}
</div>

{% endfor %}