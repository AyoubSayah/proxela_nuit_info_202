import React, {  useState } from "react";
import { motion } from "framer-motion";
import {
    DndContext,
    DragEndEvent,
    closestCenter,
    DragOverlay,
    useDndContext,
    defaultDropAnimation
} from "@dnd-kit/core";

import {
    SortableContext,
    useSortable,
    arrayMove,
    rectSortingStrategy
} from "@dnd-kit/sortable";


import styles from "./style";

const ANIMATION_DURATION_MS = 750;
const initialItems = [...Array(30).keys()].map(() => generateRandomHexCode());

export default function KonamiCodeComponent() {
    const [items, setItems] = useState(initialItems);
    const [activeId, setActiveId] = useState(null);

    function handleDragStart({ active }) {
        setActiveId(active.id);
    }

    function handleDragMove({ active, over }: DragEndEvent) {
        setItems((items) =>
            arrayMove(items, items.indexOf(active.id), items.indexOf(over?.id))
        );
    }

    function handleDragEnd(event: DragEndEvent) {
        setActiveId(null);
    }

    return (
        <div style={{position:'fixed', zIndex:999,width:'100%',height:'100%'}}>


            <DndContext
                collisionDetection={closestCenter}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                // onDragMove={handleDragMove}
                onDragOver={handleDragMove}
            >
                <SortableContext strategy={rectSortingStrategy} items={items}>
                    <div
                        style={{
                            ...styles.grid,
                            gridTemplateColumns: `repeat(10, 1fr)`
                        }}
                    >
                        {items.map((id) => (
                            <Item key={id} id={id} />
                        ))}
                    </div>
                </SortableContext>

                <DragOverlay
                    dropAnimation={{
                        ...defaultDropAnimation,
                        duration: ANIMATION_DURATION_MS / 2,
                    }}
                >
                    {activeId ? <DragOverlayItem id={activeId} /> : null}
                </DragOverlay>
            </DndContext>
        </div>
    );
}

function Item({ id }) {
    const sortable = useSortable({
        id,
        transition: { duration: ANIMATION_DURATION_MS, easing: "ease" }
    });

    const { setNodeRef, attributes, listeners, isDragging } = sortable;

    return (
        <div
            ref={setNodeRef}
            style={{
                opacity: isDragging ? 0 : 1,
                gridColumn: id[1] > Number(5) ? "span 2" : undefined
            }}
        >
            <motion.div
                layoutId={id}
                style={{
                    ...styles.cardStyles,

                   backgroundImage:'url(src/assets/summer.png)',
                    backgroundSize:'cover',
                    backgroundPosition:'center'
                }}
                transition={{
                    type: "spring",
                    duration: isDragging
                        ? ANIMATION_DURATION_MS / 1000
                        : (ANIMATION_DURATION_MS / 1000) * 3
                }}
                {...attributes}
                {...listeners}
            >
                {/* {id} - {id[1]} - {String(id[1] > Number(5))} */}
            </motion.div>
        </div>
    );
}

function DragOverlayItem(props: { id: string }) {
    const [audio] = useState(new Audio('src/assets/thunder.wav'));

    audio.play();

    const { id } = props;

    // DragOver seems to cache this component so I can't tell if the item is still actually active
    // It will remain active until it has settled in place rather than when dragEnd has occured
    // I need to know when drag end has taken place to trigger the scale down animation
    // I use a hook which looks at DndContex to get active

    const isReallyActive = useDndIsReallyActiveId(id);

    // I've wrapped the Framer Motion component with a div
    //
    // - This is so that DragOverlay can successfully apply the dragSourceOpacity
    //   I assume Framer is overwriting the dragSourceOpacity style
    //
    // - It would be great if there was a prop under Sortable called isSettling
    //   This would allow Framer to control all animation

    return (
        <div>
            <motion.div
                style={{ ...styles.cardStyles,
                    backgroundImage:'url(src/assets/cloud.png)',
                    backgroundSize:'cover',
                    backgroundPosition:'center'

                }}
                animate={{
                    scale: isReallyActive ? 1.75 : 1,
                    borderRadius: "50%"
                }}
                transition={{
                    type: "spring",
                    duration: ANIMATION_DURATION_MS / 1000
                }}
            />
        </div>
    );
}

function useDndIsReallyActiveId(id: string) {
    const context = useDndContext();
    const isActive = context.active?.id === id;
    return isActive;
}

function generateRandomHexCode() {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return "#" + n.slice(0, 6);
}
