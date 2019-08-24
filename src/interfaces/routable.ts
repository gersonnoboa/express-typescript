import express from "express";

export default interface IRoutable {
  getRouter(): express.Router;
}
