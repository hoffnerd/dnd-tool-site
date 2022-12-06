import MenuCard from './MenuCard';

const MenuCardSection = ({data, forceColsOneRow = false, largeTitle = false}) => {
    const createContent = () => {
        let navArray = [];
        if(data && data.length > 0){
            data.map((obj) => {
                if(obj.doNotShow || obj.shouldOnlyShowInNav){
                    // Do nothing because we should not show this here
                }
                else{
                    navArray.push( 
                        <MenuCard 
                            key={obj.key} 
                            display={obj.display}
                            description={obj.description}
                            path={obj.path}
                            frontImage={obj.frontImage}
                            backImage={obj.backImage}
                            columnSizes={obj.columnSizes}
                            disabledReason={obj.disabledReason}
                            forceColsOneRow={forceColsOneRow}
                            largeTitle={largeTitle}
                        /> 
                    )
                }
            });
        }
        return navArray;
    }

    if(data && data.length > 0){
        return(
            <div className="row">
                {createContent()}
            </div>
        )
    }
    console.warn("No navagation data given to MenuCardSection:", data)
    return <div></div>
}
export default MenuCardSection;