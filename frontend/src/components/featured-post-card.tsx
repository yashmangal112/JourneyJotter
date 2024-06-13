import { useNavigate } from 'react-router-dom';
import Post from '@/types/post-type';
import formatPostTime from '@/utils/format-post-time';
import CategoryPill from '@/components/category-pill';
import { createSlug } from '@/utils/slug-generator';
import { TestProps } from '@/types/test-props';
import {calculateReadTime} from '@/helpers/axios-instance';

export default function FeaturedPostCard({
  post,
  testId = 'featuredPostCard',
}: { post: Post } & TestProps) {
  const navigate = useNavigate();
  const slug = createSlug(post.title);
  return (
    <div
      className={`active:scale-click group flex h-auto cursor-pointer flex-col gap-2 rounded-lg border bg-slate-50 dark:border-none dark:bg-dark-card sm:h-48 sm:flex-row`}
      onClick={() => navigate(`/details-page/${slug}/${post._id}`, { state: { post } })}
      data-testid={testId}
    >
      <div className="w-full overflow-hidden sm:w-1/3">
        <img
          src={post.imageLink}
          alt={post.title}
          className={`sm:group-hover:scale-hover h-48 w-full rounded-lg object-cover shadow-lg transition-transform ease-in-out sm:h-full`}
        />
      </div>
      <div className="flex h-full w-full flex-col gap-2 p-3 sm:w-2/3">
        <div className="line-clamp-1 text-base font-semibold text-light-title dark:text-dark-title">
          {post.title}
        </div>
        <div className="flex flex-wrap gap-2">
          {post.categories.map((category, index) => (
            <CategoryPill key={`${category}-${index}`} category={category} />
          ))}
        </div>
        <div className="line-clamp-2 sm:line-clamp-3">
          <p className="overflow-ellipsis text-light-description dark:text-dark-description">
            {post.description}
          </p>
        </div>
        <div className="flex flex-1 items-end text-xs text-light-info dark:text-dark-info">
          {post.authorName} • {formatPostTime(post.timeOfPost)}
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="clock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-clock w-3 ml-2 mr-1 mb-[2px]"><path fill="currentColor" d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"></path></svg>
          {calculateReadTime(`${post.description}`)}
        </div>
      </div>
    </div>
  );
}
