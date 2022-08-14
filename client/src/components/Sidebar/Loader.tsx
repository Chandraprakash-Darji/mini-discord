const Loader = () => {
    return (
        <div className="w-10 h-10 aspect-square">
            <div className=" absolute w-10 h-10 border-4 border-bgDark rounded-full top-16" />
            <div className="animate-spin w-full h-full border-4 border-transparent border-l-white rounded-full mt-16" />
        </div>
    );
};

export default Loader;
