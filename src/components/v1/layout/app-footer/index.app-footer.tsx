import AppContainer from '@/components/v1/hoc/container/index.container';

const AppFooter = () => {
  return (
    <footer
      style={{
        backgroundColor: '#f0f0f0',
        borderTop: '1px solid #d8d8d8',
      }}
    >
      <AppContainer className='py-6'>
        <div className='flex flex-col items-center gap-4 text-center text-xs text-gray-500 sm:flex-row sm:justify-between sm:text-left'>
          <span>
            &copy; {new Date().getFullYear()} xcoda.me &mdash; All rights
            reserved.
          </span>
          <span>Built with passion &amp; lots of ☕</span>
        </div>
      </AppContainer>
    </footer>
  );
};

export default AppFooter;
