import { createSelector } from "reselect";

const selectDirectory = (state) => {
  return state.directory;
};

const selectDirectorySection = createSelector(
  selectDirectory,
  (selectedDirectory) => {
    return selectedDirectory.sections;
  }
);

export default selectDirectorySection;
