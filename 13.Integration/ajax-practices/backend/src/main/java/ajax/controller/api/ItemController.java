package ajax.controller.api;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ajax.domain.Item;
import ajax.dto.JsonResult;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/item")
public class ItemController {
	private final List<Item> items;

	public ItemController(@Qualifier("items") List<Item> items) {
		this.items = items;
	}

	@PostMapping()
	public ResponseEntity<JsonResult<Item>> create(@RequestBody Item item) {
		log.info("Request[POST /api, Content-Type : application/json] [{}]", item);

		// Optional maxId = Optional.ofNullable(items.isEmpty() ? null :
		// items.getFirst())
		// .map(new Function<Item, Long>() {
		// @Override
		// public Long apply(Item t) {
		// return t.getId();
		// }
		// });

		Long maxId = Optional
				.ofNullable(items.isEmpty() ? null : items.getFirst())
				.map(t -> t.getId())
				.orElse(0L); // 만약 null이면 설정 가능!

		item.setId(maxId+1L);
		items.addFirst(item);

		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(item));
	}

	@GetMapping
	public ResponseEntity<JsonResult<List<Item>>> read() {
		log.info("Request[GET /api]");
		return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(items));
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<JsonResult<Item>> read(@PathVariable Long id) {
		// stream() : 배열 반환하므로 한 개만 반환하는 findAny 사용
		Item item = items.stream().filter(t -> t.getId() == id).findAny().orElse(null);
		return ResponseEntity.status(HttpStatus.OK).body(JsonResult.success(item));
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<JsonResult<Long>> delete(@PathVariable Long id) {
		log.info("Request[DELETE /api/{}]", id);
		
//		items.removeIf(new Predicate<Item>() {
//
//			@Override
//			public boolean test(Item t) {
//				// true이면 해당 아이템 삭제
//				return t.getId() == id;
//			}
//			
//		});
		
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(items.removeIf(t -> t.getId() == id) ? id : -1));
	}

}
