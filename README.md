# ☁️ Cloud Resume Portfolio - AI/ML + DevOps

> An end-to-end cloud-native portfolio website built using modern DevOps practices and deployed on AWS.

![AWS](https://img.shields.io/badge/AWS-Cloud-orange)
![Docker](https://img.shields.io/badge/Docker-Containerized-blue)
![GitHub Actions](https://img.shields.io/badge/GitHub-Actions-black)
![CI/CD](https://img.shields.io/badge/CI%2FCD-Automated-success)
![CloudWatch](https://img.shields.io/badge/Monitoring-CloudWatch-red)
![S3](https://img.shields.io/badge/Storage-Amazon_S3-yellow)
![React](https://img.shields.io/badge/Frontend-React-61DAFB)
![Vite](https://img.shields.io/badge/Bundler-Vite-purple)

---

## Overview

This project is my personal cloud-native portfolio website built using React and deployed using modern DevOps practices.

The project demonstrates:

- Cloud Deployment
- Docker Containerization
- CI/CD Automation
- AWS Infrastructure Management
- Cloud Monitoring
- Static Asset Management using Amazon S3
- Git & GitHub Workflows

The entire deployment pipeline is automated. Any code changes pushed to GitHub are automatically deployed to the live application.

---

## Architecture

```

VS Code
↓
Git
↓
GitHub Repository
↓
GitHub Actions (CI/CD)
↓
Docker Image Build
↓
AWS EC2 Instance
↓
Docker Container
↓
Live Portfolio Website

```

Static Assets:

```

Resume PDF
↓
Amazon S3 Bucket
↓
Public Download Link

```

Monitoring:

```

AWS EC2 Instance
↓
Amazon CloudWatch
↓
CPU & Network Monitoring Dashboard

```

---

## Tech Stack

| Technology | Purpose |
|------------|------------|
| React + Vite | Frontend Development |
| Docker | Containerization |
| Git & GitHub | Version Control |
| GitHub Actions | CI/CD Pipeline |
| AWS EC2 | Deployment |
| Amazon S3 | Resume Storage |
| Amazon CloudWatch | Monitoring |
| Ubuntu | Server Environment |
| NGINX | Web Server |
| VS Code | Development Environment |

---

## Features

- Responsive Portfolio Website
- Fully Dockerized Application
- CI/CD Deployment Pipeline
- AWS EC2 Deployment
- Resume Download Integration
- Cloud Monitoring Dashboard
- GitHub Integration
- Automated Updates
- Public Cloud Deployment
- AWS S3 Static File Hosting

---

## CI/CD Workflow

```

Code Changes
↓

git add .
git commit -m "Updated Portfolio"
git push origin main

↓

GitHub Actions Triggered

↓

Docker Image Built

↓

Deployment Pipeline Executes

↓

AWS EC2 Updated

↓

Live Website Updated

```

No manual deployment is required.

---

## Project Structure

```

cloud-resume-portfolio/

├── public/
├── src/
│
├── components/
├── assets/
├── styles/
│
├── Dockerfile
├── package.json
├── vite.config.js
├── README.md
│
└── GitHub Actions Workflow

```

---

## AWS Services Used

### Amazon EC2

Used for:

- Hosting the Docker container
- Running the portfolio website
- Managing cloud infrastructure

---

### Amazon S3

Used for:

- Hosting the downloadable Resume PDF
- Public object access configuration

---

### Amazon CloudWatch

Used for monitoring:

- CPU Utilization
- Network In
- Network Out
- Instance Status Checks

---

## Docker Deployment

Build Docker Image:

```bash
docker build -t cloud-resume-portfolio .
```

Run Container:

```bash
docker run -d -p 80:80 cloud-resume-portfolio
```

Check Running Containers:

```bash
docker ps
```

---

## Local Development

Clone the repository:

```bash
git clone <your-repository-link>
```

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Build project:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

## Cloud Monitoring Dashboard

The CloudWatch dashboard monitors:

- CPU Usage
- Network Traffic
- Instance Health Checks

This provides real-time insights into the deployed application's infrastructure.

---

## Resume Integration

The resume is hosted securely on Amazon S3 and can be downloaded directly from the portfolio website.

Workflow:

```

Resume PDF
↓

Amazon S3 Bucket
↓

Public Object URL
↓

Portfolio Resume Button
↓

Instant Download

```

---

## DevOps Concepts Demonstrated

This project demonstrates:

- Infrastructure Deployment
- Docker Containerization
- Cloud Computing
- CI/CD Automation
- Git Workflows
- AWS Services Integration
- Cloud Monitoring
- Static Asset Management
- Version Control
- Production Deployment

---

## Skills Demonstrated

### Cloud

- AWS EC2
- Amazon S3
- Amazon CloudWatch

### DevOps

- Docker
- CI/CD
- GitHub Actions
- Linux Commands

### Development

- React
- Vite
- HTML
- CSS
- JavaScript

### Tools

- Git
- GitHub
- VS Code
- Docker Desktop

---

## Future Improvements

- Custom Domain Name
- HTTPS Configuration
- Elastic IP Integration
- SSL Certificate Setup
- Automatic Container Restart Policies
- CloudWatch Alarms
- DNS Configuration
- Multi-Environment Deployments

---

## Live Demo

```
Coming Soon
```

(Will be updated after custom domain deployment.)

---

## Author

### Preethi Kondaveeti

AI/ML Engineer | Cloud & DevOps Enthusiast

- LinkedIn: YOUR_LINKEDIN_LINK
- GitHub: YOUR_GITHUB_LINK
- Portfolio: LIVE_PORTFOLIO_LINK

---

## Project Highlights

- Built from scratch using modern DevOps practices.
- Deployed on AWS cloud infrastructure.
- Automated deployment using GitHub Actions.
- Containerized using Docker.
- Integrated Amazon S3 for static asset hosting.
- Monitored using Amazon CloudWatch.
- Designed to simulate a real-world production deployment workflow.

---

> "Building trustworthy AI systems is not just about models—it's also about deploying, automating, and monitoring them at scale."
