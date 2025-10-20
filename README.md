# Scalability Analysis and Design of a Real-Time Chat Application with Distributed Architecture

## Overview
This project was developed as part of my **B.Sc. Engineering Thesis** in **Computer Science and Engineering** at the **University of Rajshahi, Bangladesh**.  
It focuses on designing and evaluating a **real-time chat system** built on **distributed architecture** to achieve **low-latency communication**, **fault tolerance**, and **horizontal scalability**.  

The system demonstrates how **Node.js**, **Socket.IO**, and **EJS (Embedded JavaScript Templates)** can be combined to support **high-volume concurrent connections** efficiently.

---

##  Research Objectives
1. To design a real-time chat application that ensures low-latency communication even under heavy user loads.  
2. To analyze the scalability behavior of the system under different deployment configurations.  
3. To evaluate the performance improvements achieved through distributed architecture.  
4. To explore suitable backend technologies for real-time communication systems.  

---

## System Architecture
The architecture follows a **distributed, event-driven** model designed for scalability and performance:

- **Backend:** Node.js (Express.js + Socket.IO)  
- **Frontend:** EJS (Server-side rendering)  
- **Database:** MongoDB  
- **Load Balancing:** Nginx  
- **Deployment:** Dockerized microservices on multiple instances  

Each instance communicates through a message broker (Redis or similar) to synchronize socket events across distributed servers.
