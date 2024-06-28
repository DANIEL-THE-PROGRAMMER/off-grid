

export const Section = ({ children } : { children: React.ReactNode}) => {
    return (
      <>
        <div className="clipup p-[214px] px-[150px] gradient1 relative z-0">
          {children}
        </div>
      </>
    );
}