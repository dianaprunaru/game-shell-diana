import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { AuthorizedLayouts, Layout } from '../layouts';
import { add } from '../store/actions';

export const Play = () => {
  const dispatch = useDispatch();

  return (
    <Layout>
      <div className="mx-auto container px-4">
        <AuthorizedLayouts>
          <h1>Play</h1>

          <Link to="/" title="Home">
            Home
          </Link>

          <button
            type="button"
            onClick={() => {
              dispatch(add());
            }}
          >
            Add
          </button>
        </AuthorizedLayouts>
      </div>
    </Layout>
  );
};
