import React from 'react';

import { STORY_TYPE } from '../constants/api';
import StoryListWrapper from './story/StoryListWrapper';

/**
 *
 * @returns {object}
 * @memberof Show
 */
const Show = () => {
  return <StoryListWrapper storyType={STORY_TYPE.SHOW_STORIES} />;
};

export default Show;
