// import { classNames } from "./classNames";
import { classNames } from "shared/lib/classNames/classNames";




describe("classNames", () => {
  test("one argument", () => {
    expect(classNames("someClass")).toBe("someClass")
  });
   test("with add classes", () => {
    expect(classNames("someClass", {}, ["online"])).toBe("someClass online")
  });
   test("with mods", () => {
    const classes = 'someClass online describe'
    expect(classNames("someClass", {describe: true, completed: false}, ["online"])).toBe(classes)
  });
   test("with mods 2", () => {
    const classes = 'someClass online describe completed'
    expect(classNames("someClass", {describe: true, completed: true}, ["online"])).toBe(classes)
  });
});
