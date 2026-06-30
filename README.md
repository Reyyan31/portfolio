# 🚀 Premium Backend & DevOps Engineer Portfolio + AutoCloud Platform

A high-performance, recruiter-optimized ecosystem built for **Reyyan Alam**. This repository showcases enterprise-grade Backend Engineering, automated GitOps Cloud Systems, and robust Site Reliability Engineering (SRE) infrastructure.

- **Live Production Portfolio**: [reyyan-portfolio.vercel.app](https://reyyan-portfolio.vercel.app/)
- **Live Infrastructure Architecture Demo**: [Watch on Google Drive](https://drive.google.com/file/d/1k07z8LrA8XnlxR8E7mBoNcgCSUcN3YwC/view?usp=sharing)

---

## 📺 Live Architecture & Self-Healing Demo
> **Watch the infrastructure handle an automated production crash, alert the engineer, and self-heal in real-time without user intervention:**

[![Watch Demo Video](https://img.shields.io/badge/Video-Watch%20AutoCloud%20Demo%20on%20Drive-blue?style=for-the-badge&logo=googledrive&logoColor=white)](https://drive.google.com/file/d/1k07z8LrA8XnlxR8E7mBoNcgCSUcN3YwC/view?usp=sharing)

---

## 🛠️ AutoCloud: Cloud & Core Infrastructure Architecture

The cluster architecture bridges secure public-edge networking, declarative Infrastructure as Code (IaC), container orchestration, and closed-loop telemetry:

[ Git Push ] ──> [ GitHub Actions CI/CD ] ──> [ Trivy Scan ] ──> [ GHCR Registry ]
│
▼
[ Live User ] ──> [ Cloudflare WAF ] ──> [ Traefik Ingress ] ──> [ k3s Pod Replicas ]
│
[ Alertmanager ] <── [ Prometheus + Loki ]


*   **Compute Substrate:** Built on a resource-optimized, dedicated Linux VPS node running a production-configured, lightweight **k3s (Kubernetes)** control plane.
*   **Infrastructure as Code:** System topology, virtual networks, compute endpoints, and secure cluster boundaries provisioned declaratively via **Terraform**.
*   **Secure Traffic Edge:** Reverse-proxied through **Cloudflare** with end-to-end SSL/TLS termination, shielding the cluster behind a customized **Traefik Ingress Controller** for traffic routing.

### ⚙️ Automated GitOps CI/CD Pipeline
Every repository code commit triggers an automated, security-first supply chain that builds and deploys live upgrades in **~2 minutes**:
1. **Linting & Quality:** Automated syntax and compilation checks.
2. **Security Auditing:** Deep static container image analysis via **Trivy** to catch CVE vulnerabilities.
3. **Multi-Stage Containerization:** Standalone production builds minimizing image layer footprints.
4. **Distribution:** Securely stored and versions-managed within the GitHub Container Registry (**GHCR**).
5. **Remote Rollout:** Secure SSH rolling updates targeting live cluster deployments with zero user downtime.

### 📊 Observability & Active Incident Response (SRE)
*   **Metric Collection:** **Prometheus** aggregates real-time performance indicators, cluster memory footprints, and Kubernetes API health.
*   **Log Aggregation:** **Grafana Loki** streams centralized container and system logs dynamically, eliminating the need to manually SSH into terminal nodes.
*   **Visualization:** Custom **Grafana** dashboards profiling active pod workload constraints and live networking ingestion.
*   **Active Alerting:** Integrated **Alertmanager** pipelines. Any high-severity cluster state changes (such as a `CrashLoopBackOff`) instantly trigger webhook dispatches delivering critical incident notifications straight to engineering emails.

### 🐒 Chaos Engineering & Resiliency Proof
To validate automated cluster fault tolerance, a **Chaos Monkey CronJob** regularly terminates active production pods at random intervals. 
*   **The Result:** The Kubernetes control plane instantly identifies the health disparity, isolates the failing node, and automatically schedules a healthy replacement pod replica within seconds, maintaining constant application uptime.

---

## 🌟 Premium Portfolio Web App Features

The application layer serves as an interactive showcase of system metrics and technical experience:

- **Recruiter-Mode Toggle**: Instantly swaps the UI from a highly technical "Developer" view to a business-focused "Recruiter" view, highlighting ROI, production metrics, and key delivery statistics.
- **Live Log Terminal**: A real-time terminal simulator showcasing backend scaling logs, cache hits, traffic spikes, and Kubernetes pod health checks.
- **Native Web CV**: A custom-built, typography-perfect replica of the professional CV integrated directly within a native React modal.
- **Public Status API**: A functioning Public REST API (`/api/status`) that returns real-time candidate availability, operational statuses, and tech metrics in formatted JSON.

### App Tech Stack
- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Logic**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion

---

## 📈 Engineering Impact & Metrics

- **Scale**: Architected and managed production backend systems reaching **1M+ registered users** (State Bank of Pakistan platform).
- **Uptime**: Maintained **≥99.99% infrastructure availability** across live environments.
- **Optimization**: Engineered backend pipelines delivering **<50ms WebSocket broadcast latency** for US-based platforms.

---

## 🚀 Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone [https://github.com/Reyyan31/portfolio.git](https://github.com/Reyyan31/portfolio.git)
Install dependencies:

Bash
npm install
Run the development server:

Bash
npm run dev
Building for Production
To generate an optimized static export (located in the /out directory):

Bash
npm run build
📬 Contact & Connect
Website: reyyan-portfolio.vercel.app

LinkedIn: linkedin.com/in/reyyan-alam-a23679363

Email: reyyanalam6@gmail.com

Calendly: Book a 15-min call